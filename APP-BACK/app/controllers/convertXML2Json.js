const fastXmlParser = require('fast-xml-parser');
const JsonFind = require('json-find');
const _ = require('lodash');

const convertObj2Array = obj => (Array.isArray(obj) ? obj : [obj]);

const convertXML2Json = function (xmlData) {
  var options = {
    ignoreNameSpace: true,
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  const getAttr = (k, data) => {
    const doc = JsonFind(data);
    const attr = doc.checkKey(k);
    return attr
  }

  const jsonObj = fastXmlParser.parse(xmlData, options);
  const AirShopping = getAttr("AirShoppingRS", jsonObj)

  let DataLists = {};
  let OffersGroup = {};
  let Metadata = {};

  DataLists['OriginDestinationList'] = {};
  DataLists['FlightList'] = {};
  DataLists['FlightSegmentList'] = {};
  DataLists['PriceClassList'] = {}
  DataLists['FareList'] = {}

  const OriginDestinationList = getAttr("OriginDestinationList", AirShopping)
  const FlightList = getAttr("FlightList", AirShopping)
  const FlightSegmentList = getAttr("FlightSegmentList", AirShopping)
  const PriceClassList = getAttr("PriceClassList", AirShopping)
  const FareList = getAttr("FareList", AirShopping)

  const OffersGroupList = getAttr("OffersGroup", jsonObj)
  const MetadataList = getAttr("Metadata", jsonObj)

  const Errors = getAttr("Errors", AirShopping)
  const Warnings = getAttr("Warnings", AirShopping)
  if (Errors) {
    return {
      Errors, Warnings
    }
  }
  // For custome flight offers
  let CustomOffer = {};
  CustomOffer['OriginDestination'] = {}
  const CustomOffersGroupList = getAttr("OffersGroup", AirShopping)

  // AirShoppingRS
  let ASRS = {
    "EchoToken": AirShopping.EchoToken,
    "TimeStamp": AirShopping.TimeStamp,
    "Version": AirShopping.Version,
    "Document": {
      "Name": AirShopping.Document.Name,
      "ReferenceVersion": AirShopping.Document.ReferenceVersion,
    }
  }
  if (AirShopping.ShoppingResponseID !== "") {
    ASRS.ShoppingResponseID = AirShopping.ShoppingResponseID;
  }

  // OriginDestination
  OG = []
  ONDList = convertObj2Array(OriginDestinationList.OriginDestination)
  ONDList.forEach(value => {
    ODNodes = {
      "attributes": {
        "OriginDestinationKey": value.OriginDestinationKey,
        "refs": value.refs,
      },
      "DepartureCode": {
        "text": value.DepartureCode
      },
      "ArrivalCode": {
        "text": value.ArrivalCode
      },
    }
    DataLists['OriginDestinationList'][value.OriginDestinationKey] = ODNodes
  });

  // FlightList
  FlightLists = convertObj2Array(FlightList.Flight)
  FlightLists.forEach(value => {
    FLNodes = {
      "attributes": {
        "FlightKey": value.FlightKey,
        "refs": value.refs
      },
      "Journey": {
        "Time": {
          "text": value.Journey.Time
        }
      },
      "SegmentReferences": {
        "attributes": {
          "OnPoint": value.SegmentReferences.OnPoint ? value.SegmentReferences.OnPoint : "",
          "OffPoint": value.SegmentReferences.OffPoint ? value.SegmentReferences.OffPoint : ""
        },
        "text": value.SegmentReferences.OnPoint ? value.SegmentReferences["#text"] : value.SegmentReferences
      }
    }
    DataLists["FlightList"][value.FlightKey] = FLNodes
  })

  // FlightSegmentList
  FlightSegmentLists = convertObj2Array(FlightSegmentList.FlightSegment)
  FlightSegmentLists.forEach(value => {
    let DTerminal, ATerminal
    if (typeof value.Departure.Terminal !== "undefined") {
      DTerminal = value.Departure.Terminal.Name
    }
    if (typeof value.Arrival.Terminal !== "undefined") {
      ATerminal = value.Arrival.Terminal.Name
    }
    FSNodes = {
      "attributes": {
        "SegmentKey": value.SegmentKey
      },
      "Departure": {
        "AirportCode": {
          "text": value.Departure.AirportCode
        },
        "Date": {
          "text": value.Departure.Date
        },
        "Time": {
          "text": value.Departure.Time
        },
        "AirportName": {
          "text": value.Departure.AirportName
        },
        "Terminal": {
          "Name": {
            "text": DTerminal
          }
        }
      },
      "Arrival": {
        "AirportCode": {
          "text": value.Arrival.AirportCode
        },
        "Date": {
          "text": value.Arrival.Date
        },
        "Time": {
          "text": value.Arrival.Time
        },
        "AirportName": {
          "text": value.Arrival.AirportName
        },
        "Terminal": {
          "Name": {
            "text": ATerminal
          }
        }
      },
      "MarketingCarrier": {
        "AirlineID": {
          "text": value.MarketingCarrier.AirlineID
        },
        "Name": {
          "text": value.MarketingCarrier.Name
        },
        "FlightNumber": {
          "text": value.MarketingCarrier.FlightNumber
        }
      },
      "OperatingCarrier": {
        "AirlineID": {
          "text": value.OperatingCarrier.AirlineID
        },
        "Name": {
          "text": value.OperatingCarrier.Name
        },
        "FlightNumber": {
          "text": value.MarketingCarrier.FlightNumber
        }
      },
      "Equipment": {
        "AircraftCode": {
          "text": value.Equipment.AircraftCode
        },
      },
      "FlightDetail": {
        "FlightDuration": {
          "Value": {
            "text": value.FlightDetail.FlightDuration.Value
          }
        }
      }
    }
    DataLists["FlightSegmentList"][value.SegmentKey] = FSNodes
  })

  // PriceClassList    
  let PLN = {}
  PLN["PriceClass"] = {}
  for (const [key, value] of Object.entries(PriceClassList.PriceClass)) {
    let mediaLink = ""
    let description = []

    if (typeof (value.Descriptions) !== "undefined") {
      if (typeof value.Descriptions.Description !== "undefined") {
       
        description = value.Descriptions.Description
      }
      if (typeof value.Descriptions.Description.Media !== "undefined") {
        mediaLink = value.Descriptions.Description.Media.MediaLink
      }
    }    

    PCLNodes = {
      "attributes": {
        "ObjectKey": value.ObjectKey
      },
      "Name": {
        "text": value.Name
      },
      "Code": {
        "text": value.Code
      },
      "Descriptions": {
        "Description": {
          "Text": description,
          "Media": {
            "MediaLink": mediaLink
          }

        }
      },
      "DisplayOrder": {
        "text": value.DisplayOrder
      },
    }
    PLN["PriceClass"][value.ObjectKey] = PCLNodes
  }
  DataLists["PriceClassList"] = PLN

  // FareList
  if (FareList) {
    FareGroups = convertObj2Array(FareList.FareGroup)
    FareGroups.forEach(FareGroup => {
      FG = {
        "attributes": {
          "ListKey": FareGroup.ListKey
        },
        "Fare": {
          "FareCode": {
            "Code": FareGroup.Fare.FareCode ? FareGroup.Fare.FareCode.Code : "",
          },
        },
        "FareBasisCode": {
          "Code": FareGroup.FareBasisCode.Code,
        }
      }
      DataLists["FareList"][FareGroup.ListKey] = FG
    });
  }

  // FlightOffer   
  /* 
  const FlightOffer = [];
  AirlineOffers = convertObj2Array(CustomOffersGroupList.AirlineOffers)
  AirlineOffers.map(AirlineOffer => {
    const offers = convertObj2Array(AirlineOffer['AirlineOffer']);
    let temp = [];

    offers.forEach(offer => {
      let segtemp = [];
      const offerId = offer['OfferID']['#text'];
      const segments = convertObj2Array(offer['PricedOffer']['Associations']['ApplicableFlight']['FlightSegmentReference']);
      const destination = offer['PricedOffer']['Associations']['ApplicableFlight']['OriginDestinationReferences'];
      const flight = offer['PricedOffer']['Associations']['ApplicableFlight']['FlightReferences'];

      segments.map((segment) => {
        segtemp.push(segment.ref)
      })

      let obj = {
        key: destination,
        flight,
        segment: segtemp,
        offers: [offerId],
      };

      let oId = temp.find(o => o.flight === flight);
      if (oId) {
        oId.offers.push(offerId);
        temp.push(oId);
      } else
        temp.push(obj);
    });
    const tmp_grouped = .mapValues(_.groupBy(temp, 'key'), flist => flist.map(tflight => .omit(tflight, 'key')));
    FlightOffer.push(tmp_grouped);
  });
  */

  /* 
  // working flight offer
  FL = []
  FlightOffers = convertObj2Array(OriginDestinationList.OriginDestination)
  FlightOffers.forEach(OD => {

    AirlineOffers = convertObj2Array(CustomOffersGroupList.AirlineOffers)
    AirlineOffers.forEach(OFS => {
      AirlineOffer = convertObj2Array(OFS.AirlineOffer)
      AirlineOffer.forEach(OF => {

        // OriginDestinationReferences:  DXBLHR
        ODR = OF.PricedOffer.Associations.ApplicableFlight.OriginDestinationReferences

        // FlightReferences: Flight2-BA7
        if (OD.OriginDestinationKey === ODR) {
          if (FL.indexOf(OF.PricedOffer.Associations.ApplicableFlight.FlightReferences) == -1) {
            FL.push({
              "flight": OF.PricedOffer.Associations.ApplicableFlight.FlightReferences,
              "OND": OD.OriginDestinationKey
            })
          }
        }
      });
    })

    CustomeFLOffers = {}
    FL.forEach(flKey => {
      AirlineOffers = convertObj2Array(CustomOffersGroupList.AirlineOffers)
      var AllOffers = [];
      AirlineOffers.forEach(OFS => {
        AirlineOffer = convertObj2Array(OFS.AirlineOffer)
        SG = []
        OFR = []
        AirlineOffer.forEach(OF => {
          if (OF.PricedOffer.Associations.ApplicableFlight.FlightReferences == flKey.flight && OD.OriginDestinationKey == OF.PricedOffer.Associations.ApplicableFlight.OriginDestinationReferences) {
            if (AllOffers.indexOf("Offer") == -1) {
              FlightSegmentReferences = convertObj2Array(OF.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference)
              FlightSegmentReferences.forEach(FlightSegmentReference => {
                if (SG.indexOf(FlightSegmentReference.ref) == -1) {
                  SG.push(FlightSegmentReference.ref)
                }
              })
              OFR.push(OF.OfferID["#text"])
            }
          }
        });
        if (OFR.length > 0 && SG.length > 0) {
          AllOffers.push({
            "Offer": OFR,
            "Segments": SG
          });
        }
      })
      if (OD.OriginDestinationKey == flKey.OND) {
        CustomeFLOffers[flKey.flight] = AllOffers
      }
    });
    CustomOffer['OriginDestination'][OD.OriginDestinationKey] = CustomeFLOffers
  });
  */

  const result = [];
  AirlineOffers = convertObj2Array(CustomOffersGroupList.AirlineOffers)
  AirlineOffers.map(AirlineOffer => {

    const owner = AirlineOffer['Owner'];
    const offers = convertObj2Array(AirlineOffer['AirlineOffer']);

    let temp = [];
    offers.forEach(offer => {

      let segtemp = [];
      const offerId = offer['OfferID']['#text'];
      const segments = offer['PricedOffer']['Associations']['ApplicableFlight']['FlightSegmentReference'] ? convertObj2Array(offer['PricedOffer']['Associations']['ApplicableFlight']['FlightSegmentReference']) : "";
      const destination = offer['PricedOffer']['Associations']['ApplicableFlight']['OriginDestinationReferences'];
      const flight = offer['PricedOffer']['Associations']['ApplicableFlight']['FlightReferences'];

      if (segments && segments.length) {
        segments.map((segment) => {
          segtemp.push(segment.ref)
        })
      }

      let obj = {
        flight,
        key: destination,
        [flight]: {
          owner,
          segment: [segtemp],
          offers: [offerId],
        }
      };

      let oId = temp.find(o => o.flight === flight);

      if (oId) {
        oId[flight].offers.push(offerId);
        temp.push(oId);
      }
      else {
        temp.push(obj);
      }

    });

    const temp_data = _.uniqBy(temp, 'flight');
    const grouped = _.mapValues(_.groupBy(temp_data, 'key'), flist => flist.map(tflight => _.omit(tflight, 'key')));
    result.push(grouped);
    // result.push(temp);
  });

  // OffersGroup
  OFN = {}
  OGN = []
  for (let [key, value] of Object.entries(OffersGroupList)) {
    value = convertObj2Array(value)
    for ([okey, ovalue] of Object.entries(value)) {
      let Refundable = ""
      Offer = {}
      AirlineOffers = convertObj2Array(ovalue.AirlineOffer)
      AirlineOffers.forEach(AirlineOffer => {

        if (typeof AirlineOffer.Penalty !== "undefined" && typeof AirlineOffer.Penalty.RefundableInd !== "undefined") {
          Refundable = AirlineOffer.Penalty.RefundableInd
        }

        PenaltyDetails = ""
        DetailsData = []
        if (typeof AirlineOffer.Penalty !== "undefined" && typeof AirlineOffer.Penalty.Details !== "undefined") {
          Details = convertObj2Array(AirlineOffer.Penalty.Details)
          Details.forEach(d => {
            Detail = convertObj2Array(d.Detail)
            Detail.forEach(dt => {
              AmountsData = []
              if (typeof dt !== "undefined") {
                if (typeof dt.Amounts !== "undefined") {
                  Amounts = convertObj2Array(dt.Amounts)
                  Amounts.forEach(Amount => {
                    AM = {
                      "Amount": {
                        "CurrencyAmountValue": {
                          "text": Amount.Amount.CurrencyAmountValue,
                        }
                      }
                    }
                  });
                  AmountsData.push(AM)
                }
                Detail = {
                  "Type": {
                    "text": dt.Type,
                  },
                  "Amounts": AmountsData.length > 0 ? AmountsData : ""
                }
                DetailsData.push(Detail)
              }
            });
          })
          PenaltyDetails = {
            "Detail": DetailsData
          }
        }

        TaxesData = []
        OfferPriceData = []
        OfferPrices = convertObj2Array(AirlineOffer.PricedOffer.OfferPrice)
        OfferPrices.forEach(OfferPrice => {
          Taxes = convertObj2Array(OfferPrice.RequestedDate.PriceDetail.Taxes)
          Taxes.forEach(Tax => {

            TX = {
              "Total": {
                "attributes": {
                  "Code": Tax.Total.Code
                },
                "text": Tax.Total["#text"]
              }
            }
            TaxesData.push(TX)
          });

          RAssociations = convertObj2Array(OfferPrice.RequestedDate.Associations)
          RequestAssociationsData = []
          RAssociations.forEach(RAssociation => {
            RA = {
              "AssociatedTraveler": {
                "TravelerReferences": {
                  "text": RAssociation.AssociatedTraveler.TravelerReferences
                }
              },
              "ApplicableFlight": RAssociation.ApplicableFlight
            }
            RequestAssociationsData.push(RA)
          });

          FareDetail = convertObj2Array(OfferPrice.FareDetail)
          FareDetailData = []
          FareDetail.forEach(f => {
            if (typeof f.FareComponent !== "undefined") {
              FareComponents = convertObj2Array(f.FareComponent)
              FareComponents.forEach(FareComponent => {
                FC = {
                  "attributes": {
                    "refs": FareComponent.refs ? FareComponent.refs : ""
                  },
                  "SegmentReference": {
                    "text": FareComponent.SegmentReference
                  },
                  "FareBasis": {
                    "FareBasisCode": {
                      "Code": FareComponent.FareBasis ? FareComponent.FareBasis.FareBasisCode.Code : "-"
                    },
                    "FareBasisCode": {
                      "Code": FareComponent.FareBasis ? FareComponent.FareBasis.RBD : "-"
                    }
                  }
                }
                FareDetailData.push(FC)
              });
            }
          });

          SegmentReferencesData = []
          if (typeof OfferPrice.RequestedDate.PriceDetail.SegmentReferences !== "undefined") {
            SegmentReferences = convertObj2Array(OfferPrice.RequestedDate.PriceDetail.SegmentReferences)
            SegmentReferences.forEach(SegmentReference => {
              SR = {
                "attributes": {
                  "OnPoint": SegmentReference.OnPoint ? SegmentReference.OnPoint : "",
                  "OffPoint": SegmentReference.OffPoint ? SegmentReference.OffPoint : "",
                },
                "text": SegmentReference["#text"]
              }
              SegmentReferencesData.push(SR)
            });
          }

          OP = {
            "attributes": {
              "OfferItemID": OfferPrice.OfferItemID,
            },
            "RequestedDate": {
              "PriceDetail": {
                "TotalAmount": {
                  "DetailCurrencyPrice": {
                    "Total": {
                      "attributes": {
                        "Code": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total.Code
                      },
                      "text": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total["#text"]
                    }
                  }
                },
                "BaseAmount": {
                  "attributes": {
                    "Code": OfferPrice.RequestedDate.PriceDetail.BaseAmount.Code
                  },
                  "text": OfferPrice.RequestedDate.PriceDetail.BaseAmount["#text"]
                },
                "Taxes": TaxesData,
                "SegmentReferences": SegmentReferencesData
              },
              "Associations": RequestAssociationsData
            },
            "FareDetail": {
              "FareComponent": FareDetailData,
              "PriceClassReference": {
                "text": OfferPrice.FareDetail.PriceClassReference
              }
            }
          }
          OfferPriceData.push(OP)
        });

        Associations = convertObj2Array(AirlineOffer.PricedOffer.Associations)
        AssociationsData = []
        AssociationsFlightSegmentList = []
        AssociationsOriginDestinationReferences = []
        AssociationsFlightReferences = []
        Associations.forEach(Association => {

          FlightSegmentReferences = convertObj2Array(Association.ApplicableFlight.FlightSegmentReference)
          FlightSegmentReferences.forEach(FlightSegmentReference => {
            Attr = {
              "ref": FlightSegmentReference ? FlightSegmentReference.ref : ""
            }
            CAttr = {
              "SeatsLeft": FlightSegmentReference ? FlightSegmentReference.ClassOfService.Code.SeatsLeft : ""
            }
            MAttr = {
              "CabinDesignator": FlightSegmentReference ? FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator : ""
            }
            FS = {
              "attributes": Attr,
              "ClassOfService": {
                "Code": {
                  "attributes": CAttr,
                  "text": FlightSegmentReference ? FlightSegmentReference.ClassOfService.Code : ""
                },
                "MarketingName": {
                  "attributes": MAttr,
                  "text": FlightSegmentReference ? FlightSegmentReference.ClassOfService.MarketingName : ""
                },
              }
            }
            AssociationsFlightSegmentList.push(FS)
          });

          OriginDestinationReferences = convertObj2Array(Association.ApplicableFlight.OriginDestinationReferences)
          OriginDestinationReferences.forEach(OriginDestinationReference => {
            OR = {
              "text": OriginDestinationReference
            }
            AssociationsOriginDestinationReferences.push(OR)
          });

          FlightReferences = convertObj2Array(Association.ApplicableFlight.FlightReferences)
          FlightReferences.forEach(FlightReference => {
            FR = {
              "text": FlightReference
            }
            AssociationsFlightReferences.push(FR)
          });

          AS = {
            "ApplicableFlight": {
              "FlightSegmentReference": AssociationsFlightSegmentList,
              "OriginDestinationReferences": AssociationsOriginDestinationReferences,
              "FlightReferences": AssociationsFlightReferences
            }
          }
          AssociationsData.push(AS)
        });

        Penalty = {
          "attributes": {
            "RefundableInd": Refundable,
          },
          "Details": PenaltyDetails
        }

        OFNode = {
          "OfferID": {
            "attributes": {
              "Owner": AirlineOffer.OfferID.Owner,
              "ObjectKey": AirlineOffer.OfferID.ObjectKey
            },
            "text": AirlineOffer.OfferID["#text"]
          },
          "TimeLimits": {
            "OfferExpiration": {
              "attributes": {
                "DateTime": AirlineOffer.TimeLimits ? AirlineOffer.TimeLimits.OfferExpiration.DateTime : ""
              }
            }
          },
          "TotalPrice": {
            "DetailCurrencyPrice": {
              "Total": {
                "attributes": {
                  "Code": AirlineOffer.TotalPrice.DetailCurrencyPrice.Total.Code
                },
                "text": AirlineOffer.TotalPrice.DetailCurrencyPrice.Total["#text"]
              }
            }
          },
          "Penalty": Penalty,
          "PricedOffer": {
            "OfferPrice": OfferPriceData,
            "Associations": AssociationsData
          }
        }
        Offer[AirlineOffer.OfferID["#text"]] = OFNode
      });


      OFN = {
        "AirlineOfferSnapshot": {
          "TravelerQuantity": {
            "text": ovalue.AirlineOfferSnapshot.TravelerQuantity
          },
          "Highest": {
            "EncodedCurrencyPrice": {
              "attributes": {
                "Code": ovalue.AirlineOfferSnapshot.Highest.EncodedCurrencyPrice.Code
              },
              "text": ovalue.AirlineOfferSnapshot.Highest.EncodedCurrencyPrice["#text"]
            }
          },
          "Lowest": {
            "EncodedCurrencyPrice": {
              "attributes": {
                "Code": ovalue.AirlineOfferSnapshot.Lowest.EncodedCurrencyPrice.Code
              },
              "text": ovalue.AirlineOfferSnapshot.Lowest.EncodedCurrencyPrice["#text"]
            }
          }
        },
        "BOwner": {
          "text": ovalue.Owner
        },
        "Offer": Offer
      }
      OGN.push(OFN)


    }
    OffersGroup = OGN
  }

  // Metadata
  OMCE = {}
  CM = []
  for (const [key, Other] of Object.entries(MetadataList)) {
    OtherMetadatas = convertObj2Array(Other)
    CMData = {}
    OtherMetadatas.map((OtherMetadata) => {
      OMDs = convertObj2Array(OtherMetadata.OtherMetadata)
      OMDs.map((value) => {
        OMD = convertObj2Array(value)
        OMD.map(v => {
          if (typeof v.CurrencyMetadatas !== "undefined") {
            CMD = v.CurrencyMetadatas.CurrencyMetadata
            CMData = {
              "CurrencyMetadata": {
                "attributes": {
                  "MetadataKey": CMD.MetadataKey
                },
                "Decimals": CMD.Decimals,
                "Name": CMD.Name,
                "Application": CMD.Application
              }
            }
          }
          if (typeof v.EquivalentID_Metadatas !== "undefined") {
            EMDATAs = convertObj2Array(v.EquivalentID_Metadatas)
            EMDATAs.map((emdts) => {
              EMDs = emdts.EquivalentID_Metadata
              EMD = convertObj2Array(EMDs)
              EMDArr = []
              EMD.map(em => {
                EQD = convertObj2Array(em.EquivID)
                let EQAttr, Attr
                EQID = []
                EQD.map(e => {
                  if (typeof e.MetadataKey !== "undefined") {
                    EQAttr = {
                      "MetadataKey": e.MetadataKey
                    }
                  }
                  EQ = {
                    "attributes": EQAttr,
                    "EquivalentID_Key": e.EquivalentID_Key,
                    "ID_Value": e.ID_Value,
                    "Owner": e.Owner,
                  }
                  EQID.push(EQ)
                })
                if (typeof em.MetadataKey !== "undefined") {
                  Attr = {
                    "MetadataKey": em.MetadataKey
                  }
                }
                CD = {
                  "EquivalentID_Metadata": {
                    "attributes": Attr,
                    "EquivID": EQID
                  }
                }
                EMDArr.push(CD)
              })
              CMData = {
                "EquivalentID_Metadatas": EMDArr
              }
            })
          }
          if (typeof v.RuleMetadatas !== "undefined") {
            RMD = v.RuleMetadatas.RuleMetadata
            CMData = {
              "RuleMetadata": {
                "attributes": {
                  "MetadataKey": RMD.MetadataKey
                },
                "RuleID": RMD.RuleID,
                "Name": RMD.Name,
                "Values": {
                  "Value": {
                    "Instruction": RMD.Values.Value.Instruction
                  }
                },
                "Remarks": {
                  "Remark": RMD.Remarks.Remark
                }
              }
            }
          }
          CM.push(CMData)
        })
      })
      Metadata["OtherMetadata"] = CM
    });
  }


  // Changed for indexing Flight Obj with Offer Obj
  let indexedResult = []
  for (let i = 0; i < result.length; i++) {

    let destination = Object.keys(result[i])[0]
    let flightKey = result[i][destination][0].flight
    let offerKey = result[i][destination][0][flightKey].offers[0]

    for (let j = 0; j < OffersGroup.length; j++) {

      if (OffersGroup[j].Offer.hasOwnProperty(offerKey)) {
        indexedResult[j] = result[i]
      }

    }
  }

  return {
    "AirShoppingRS": ASRS,
    "DataLists": DataLists,
    "FlightOffer": indexedResult,
    "OffersGroup": OffersGroup,
    "Metadata": Metadata,
  };

}

const flightPrice2Json = function (xmlData) {
  var options = {
    ignoreNameSpace: true,
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  const getAttr = (k, data) => {
    const doc = JsonFind(data);
    const attr = doc.checkKey(k);
    return attr
  }

  const jsonObj = fastXmlParser.parse(xmlData, options);

  const FlightPriceNode = getAttr("FlightPriceRS", jsonObj)

  const Errors = getAttr("Errors", FlightPriceNode)
  const Warnings = getAttr("Warnings", FlightPriceNode)
  if (Errors) {
    return {
      Errors,
      Warnings
    }
  }

  let DataLists = {};
  let Metadata = {};

  DataLists['OriginDestinationList'] = {};
  DataLists['FlightList'] = {};
  DataLists['FlightSegmentList'] = {};
  DataLists['AnonymousTravelersList'] = {}
  DataLists['CarryOnAllowanceList'] = {}
  DataLists['CheckedBagAllowanceList'] = {}
  DataLists['FareList'] = {}

  const OriginDestinationList = getAttr("OriginDestinationList", FlightPriceNode)
  const FlightList = getAttr("FlightList", FlightPriceNode)
  const FlightSegmentList = getAttr("FlightSegmentList", FlightPriceNode)
  const AnonymousTravelerList = getAttr("AnonymousTravelerList", FlightPriceNode)

  const CarryOnAllowanceList = getAttr("CarryOnAllowanceList", jsonObj)
  const CheckedBagAllowanceList = getAttr("CheckedBagAllowanceList", jsonObj)
  const FareList = getAttr("FareList", jsonObj)
  const MetadataList = getAttr("Metadata", jsonObj)

  // For custome flight offers
  let CustomOffer = {};
  CustomOffer = {}
  CustomOffer['OriginDestination'] = {}
  CustomIndex = {}

  // OriginDestination
  OG = []
  ONDList = convertObj2Array(OriginDestinationList.OriginDestination)
  ONDList.forEach(value => {
    ODNodes = {
      "attributes": {
        "OriginDestinationKey": value.OriginDestinationKey,
        "refs": value.refs
      },
      "DepartureCode": {
        "text": value.DepartureCode
      },
      "ArrivalCode": {
        "text": value.ArrivalCode
      }
    }
    DataLists['OriginDestinationList'][value.OriginDestinationKey] = ODNodes
  });

  // FlightList    
  FlightLists = convertObj2Array(FlightList.Flight)
  FlightLists.forEach(Flight => {
    if (Flight.Journey !== undefined) {
      FLNodes = {
        "attributes": {
          "FlightKey": Flight.FlightKey,
          "refs": Flight.refs
        },
        "Journey": {
          "Time": {
            "text": Flight.Journey.Time
          }
        },
        "SegmentReferences": {
          "attributes": {
              "OnPoint": Flight.SegmentReferences.OnPoint ?  Flight.SegmentReferences.OnPoint : "",
              "OffPoint": Flight.SegmentReferences.OffPoint ? Flight.SegmentReferences.OffPoint : ""
          },
          "text": Flight.SegmentReferences.OnPoint ? Flight.SegmentReferences["#text"] : Flight.SegmentReferences
        }
      }
    } else {
      FLNodes = {
        "attributes": {
          "FlightKey": Flight.FlightKey,
          "refs": Flight.refs
        },
        "Journey": {
          "Time": {
            "text": ""
          }
        },
        "SegmentReferences": {
          "attributes": {
              "OnPoint": Flight.SegmentReferences.OnPoint ?  Flight.SegmentReferences.OnPoint : "",
              "OffPoint": Flight.SegmentReferences.OffPoint ? Flight.SegmentReferences.OffPoint : ""
          },
          "text": Flight.SegmentReferences.OnPoint ? Flight.SegmentReferences["#text"] : Flight.SegmentReferences
        }
      }
    }

    DataLists["FlightList"][Flight.FlightKey] = FLNodes
  });

  // FlightSegmentList
  FlightSegments = convertObj2Array(FlightSegmentList.FlightSegment)
  FlightSegments.forEach(FlightSegment => {
    let DTerminal, ATerminal, MAIDAttr, MAIDOMRAttr, MAirlineID, OAIDAttr, OAIDOMRAttr, OAirlineID, EAIDAttr, EAIDOMRAttr, AircraftCode
    if (typeof FlightSegment.Departure.Terminal !== "undefined") {
      DTerminal = FlightSegment.Departure.Terminal.Name
    }
    if (typeof FlightSegment.Arrival.Terminal !== "undefined") {
      ATerminal = FlightSegment.Arrival.Terminal.Name
    }
    if (typeof FlightSegment.MarketingCarrier.AirlineID.refs !== "undefined") {
      MAIDAttr = FlightSegment.MarketingCarrier.AirlineID.refs ? FlightSegment.MarketingCarrier.AirlineID.refs : "0"
    }
    if (typeof FlightSegment.MarketingCarrier.AirlineID.ObjectMetaReferences !== "undefined") {
      MAIDOMRAttr = FlightSegment.MarketingCarrier.AirlineID.ObjectMetaReferences ? FlightSegment.MarketingCarrier.AirlineID.ObjectMetaReferences : "0"
    }
    (MAIDAttr || MAIDOMRAttr) ? MAirlineID = FlightSegment.MarketingCarrier.AirlineID["#text"] : MAirlineID = FlightSegment.MarketingCarrier.AirlineID

    if (typeof FlightSegment.OperatingCarrier.AirlineID.refs !== "undefined") {
      OAIDAttr = FlightSegment.OperatingCarrier.AirlineID.refs ? FlightSegment.OperatingCarrier.AirlineID.refs : "0"
    }
    if (typeof FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences !== "undefined") {
      OAIDOMRAttr = FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences ? FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences : "0"
    }
    (OAIDAttr || OAIDOMRAttr) ? OAirlineID = FlightSegment.OperatingCarrier.AirlineID["#text"] : OAirlineID = FlightSegment.OperatingCarrier.AirlineID

    if (typeof FlightSegment.OperatingCarrier.AirlineID.refs !== "undefined") {
      OAIDAttr = FlightSegment.OperatingCarrier.AirlineID.refs ? FlightSegment.OperatingCarrier.AirlineID.refs : "0"
    }
    if (typeof FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences !== "undefined") {
      OAIDOMRAttr = FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences ? FlightSegment.OperatingCarrier.AirlineID.ObjectMetaReferences : "0"
    }
    (OAIDAttr || OAIDOMRAttr) ? OAirlineID = FlightSegment.OperatingCarrier.AirlineID["#text"] : OAirlineID = FlightSegment.OperatingCarrier.AirlineID

    if (typeof FlightSegment.Equipment.AircraftCode.refs !== "undefined") {
      EAIDAttr = FlightSegment.Equipment.AircraftCode.refs ? FlightSegment.Equipment.AircraftCode.refs : "0"
    }
    if (typeof FlightSegment.Equipment.AircraftCode.ObjectMetaReferences !== "undefined") {
      EAIDOMRAttr = FlightSegment.Equipment.AircraftCode.ObjectMetaReferences ? FlightSegment.Equipment.AircraftCode.ObjectMetaReferences : "0"
    }
    (EAIDAttr || EAIDOMRAttr) ? AircraftCode = FlightSegment.Equipment.AircraftCode["#text"] : AircraftCode = FlightSegment.Equipment.AircraftCode
    FSNodes = {
      "attributes": {
        "SegmentKey": FlightSegment.SegmentKey
      },
      "Departure": {
        "AirportCode": {
          "text": FlightSegment.Departure.AirportCode
        },
        "Date": {
          "text": FlightSegment.Departure.Date
        },
        "Time": {
          "text": FlightSegment.Departure.Time
        },
        "AirportName": {
          "text": FlightSegment.Departure.AirportName
        },
        "Terminal": {
          "Name": {
            "text": DTerminal
          }
        }
      },
      "Arrival": {
        "AirportCode": {
          "text": FlightSegment.Arrival.AirportCode
        },
        "Date": {
          "text": FlightSegment.Arrival.Date
        },
        "Time": {
          "text": FlightSegment.Arrival.Time
        },
        "AirportName": {
          "text": FlightSegment.Arrival.AirportName
        },
        "Terminal": {
          "Name": {
            "text": ATerminal
          }
        }
      },
      "MarketingCarrier": {
        "attributes": {
          "refs": FlightSegment.MarketingCarrier.refs ? FlightSegment.MarketingCarrier.refs : ""
        },
        "AirlineID": {
          "attributes": {
            "refs": MAIDAttr ? MAIDAttr : "",
            "ObjectMetaReferences": MAIDOMRAttr ? MAIDOMRAttr : ""
          },
          "text": MAirlineID
        },
        "Name": {
          "text": FlightSegment.MarketingCarrier.Name
        },
        "FlightNumber": {
          "text": FlightSegment.MarketingCarrier.FlightNumber
        }
      },
      "OperatingCarrier": {
        "attributes": {
          "refs": FlightSegment.OperatingCarrier.refs ? FlightSegment.OperatingCarrier.refs : ""
        },
        "AirlineID": {
          "attributes": {
            "refs": OAIDAttr ? OAIDAttr : "",
            "ObjectMetaReferences": OAIDOMRAttr ? OAIDOMRAttr : ""
          },
          "text": OAirlineID
        },
        "Name": {
          "text": FlightSegment.OperatingCarrier.Name
        },
        "FlightNumber": {
          "text": FlightSegment.MarketingCarrier.FlightNumber
        }
      },
      "Equipment": {
        "attributes": {
          "refs": FlightSegment.Equipment.refs ? FlightSegment.Equipment.refs : ""
        },
        "AircraftCode": {
          "attributes": {
            "refs": EAIDAttr ? EAIDAttr : "",
            "ObjectMetaReferences": EAIDOMRAttr ? EAIDOMRAttr : ""
          },
          "text": AircraftCode,
        },
      },
      "FlightDetail": {
        "FlightDuration": {
          "Value": {
            "text": (FlightSegment.FlightDetail && FlightSegment.FlightDetail.FlightDuration && FlightSegment.FlightDetail.FlightDuration.Value) ? FlightSegment.FlightDetail.FlightDuration.Value : ":"
          }
        }
      }
    }
    DataLists["FlightSegmentList"][FlightSegment.SegmentKey] = FSNodes
  });

  // AnonymousTravelerList    
  if (AnonymousTravelerList) {
    AnonymousTravelers = convertObj2Array(AnonymousTravelerList.AnonymousTraveler)
    AnonymousTravelers.forEach(AnonymousTraveler => {
      ATraveler = convertObj2Array(AnonymousTraveler)
      AT = []
      ATraveler.forEach(Traveler => {
        TL = {
          "attributes": {
            "ObjectKey": Traveler.ObjectKey
          },
          "PTC": {
            "attributes": {
              "Quantity": Traveler.PTC.Quantity
            },
            "text": Traveler.PTC["#text"]
          }
        }
        T = {
          [Traveler.ObjectKey]: TL
        }
        DataLists["AnonymousTravelersList"][Traveler.ObjectKey] = TL
      });
    });
  }

  // CarryOnAllowanceList
  if (CarryOnAllowanceList) {
    CarryOnAllowances = convertObj2Array(CarryOnAllowanceList.CarryOnAllowance)
    CarryOnAllowances.forEach(CarryOnAllowance => {
      let WeightAllowance, PieceAllowance
      if (typeof CarryOnAllowance.WeightAllowance !== "undefined") {
        WeightAllowance = {
          "MaximumWeight": {
            "Value": CarryOnAllowance.WeightAllowance.MaximumWeight.Value,
            "UOM": CarryOnAllowance.WeightAllowance.MaximumWeight.UOM,
          }
        }
      }
      if (typeof CarryOnAllowance.PieceAllowance !== "undefined") {
        PieceAllowance = {
          "TotalQuantity": CarryOnAllowance.PieceAllowance.TotalQuantity
        }
      }
      CAL = {
        "attributes": {
          "ListKey": CarryOnAllowance.ListKey
        },
        "WeightAllowance": WeightAllowance,
        "PieceAllowance": PieceAllowance
      }
      DataLists["CarryOnAllowanceList"][CarryOnAllowance.ListKey] = CAL
    });
  }

  // CheckedBagAllowanceList
  if (CheckedBagAllowanceList) {
    CheckedBagAllowances = convertObj2Array(CheckedBagAllowanceList.CheckedBagAllowance)
    CheckedBagAllowances.forEach(CheckedBagAllowance => {
      let ApplicableParty, TotalQuantity
      PieceMeasurementsData = []
      if (typeof CheckedBagAllowance.PieceAllowance !== "undefined") {
        if (typeof CheckedBagAllowance.PieceAllowance.ApplicableParty !== "undefined") {
          ApplicableParty = CheckedBagAllowance.PieceAllowance.ApplicableParty
        }
        if (typeof CheckedBagAllowance.PieceAllowance.TotalQuantity !== "undefined") {
          TotalQuantity = CheckedBagAllowance.PieceAllowance.TotalQuantity
        }
        if (typeof CheckedBagAllowance.PieceAllowance.PieceMeasurements !== "undefined") {
          PieceMeasurements = convertObj2Array(CheckedBagAllowance.PieceAllowance.PieceMeasurements)
          PieceMeasurements.forEach(PieceMeasurement => {
            if (PieceMeasurement.PieceWeightAllowance !== undefined) {
              PD = {
                "attributes": {
                  "Quantity": PieceMeasurement.Quantity
                },
                "PieceWeightAllowance": {
                  "MaximumWeight": {
                    "Value": PieceMeasurement.PieceWeightAllowance.MaximumWeight.Value,
                    "UOM": PieceMeasurement.PieceWeightAllowance.MaximumWeight.UOM
                  }
                }
              }
            } else {
              PD = {
                "attributes": {
                  "Quantity": PieceMeasurement.Quantity
                },
                "PieceWeightAllowance": {
                  "MaximumWeight": {
                    "Value": "",
                    "UOM": ""
                  }
                }
              }
            }
            PieceMeasurementsData.push(PD)
          });
        }
      }
      CBA = {
        "attributes": {
          "ListKey": CheckedBagAllowance.ListKey
        },
        "PieceAllowance": {
          "ApplicableParty": ApplicableParty,
          "TotalQuantity": TotalQuantity,
          "PieceMeasurements": PieceMeasurementsData
        },
        "WeightAllowance":{
          "MaximumWeight":{
              "Value": (CheckedBagAllowance && CheckedBagAllowance.WeightAllowance && CheckedBagAllowance.WeightAllowance.MaximumWeight) ? CheckedBagAllowance.WeightAllowance.MaximumWeight.Value : "" ,
              "UOM": (CheckedBagAllowance && CheckedBagAllowance.WeightAllowance && CheckedBagAllowance.WeightAllowance.MaximumWeight) ? CheckedBagAllowance.WeightAllowance.MaximumWeight.UOM : ""
          }
        }
      }
      DataLists["CheckedBagAllowanceList"][CheckedBagAllowance.ListKey] = CBA
    });
  }

  // FareList
  if (FareList) {
    FareGroups = convertObj2Array(FareList.FareGroup)
    FareGroups.forEach(FareGroup => {
      FG = {}
      if (FareGroup.Fare && FareGroup.Fare.FareCode && FareGroup.Fare.FareCode.Code) {
        FG = {
          "attributes": {
            "ListKey": FareGroup.ListKey
          },
          "Fare": {
            "FareCode": {
              "Code": FareGroup.Fare.FareCode.Code,
            },
          },
          "FareBasisCode": {
            "Code": FareGroup.FareBasisCode.Code,
          }
        }
      } else {
        FG = {
          "attributes": {
            "ListKey": FareGroup.ListKey
          },
          "FareBasisCode": {
            "Code": FareGroup.FareBasisCode.Code,
          }
        }
      }
      DataLists["FareList"][FareGroup.ListKey] = FG
    });
  }

  // AirlineOffer
  OFN = {}
  OGN = []
  const AirlineOffersNode = getAttr("AirlineOffers", jsonObj)
  let Refundable = ""
  Offer = {}
  AirlineOffers = convertObj2Array(AirlineOffersNode)
  AirlineOffers.forEach(AirlineOffer => {
    if (typeof AirlineOffer.AirlineOffer.Penalty !== "undefined" && typeof AirlineOffer.AirlineOffer.Penalty.RefundableInd !== "undefined") {
      Refundable = AirlineOffer.AirlineOffer.Penalty.RefundableInd
    }

    PenaltyDetails = ""
    DetailsData = []
    if (typeof AirlineOffer.AirlineOffer.Penalty !== "undefined" && typeof AirlineOffer.AirlineOffer.Penalty.Details !== "undefined") {
      Details = convertObj2Array(AirlineOffer.AirlineOffer.Penalty.Details)
      Details.forEach(d => {
        Detail = convertObj2Array(d.Detail)
        Detail.forEach(dt => {
          AmountsData = []
          if (typeof dt !== "undefined") {
            if (typeof dt.Amounts !== "undefined") {
              Amounts = convertObj2Array(dt.Amounts)
              Amounts.forEach(Amount => {
                AM = {
                  "Amount": {
                    "CurrencyAmountValue": {
                      "text": Amount.Amount.CurrencyAmountValue,
                    }
                  }
                }
              });
              AmountsData.push(AM)
            }

            Detail = {
              "Type": {
                "text": dt.Type,
              },
              "Amounts": AmountsData.length > 0 ? AmountsData : ""
            }
            DetailsData.push(Detail)
          }
        });
      })
      PenaltyDetails = {
        "Detail": DetailsData
      }
    }

    OfferPrices = convertObj2Array(AirlineOffer.AirlineOffer.PricedOffer.OfferPrice)
    OfferPriceData = []
    OfferPrices.forEach(OfferPrice => {
      TaxesData = []
      Taxes = convertObj2Array(OfferPrice.RequestedDate.PriceDetail.Taxes)
      Taxes.forEach(Tax => {

        TX = {
          "Total": {
            "attributes": {
              "Code": Tax.Total.Code
            },
            "text": Tax.Total["#text"]
          }
        }
        TaxesData.push(TX)
      });
      RequestAssociationsData = []
      RAssociations = convertObj2Array(OfferPrice.RequestedDate.Associations)
      RAssociations.forEach(RAssociation => {
        FlightSegmentReferences = convertObj2Array(RAssociation.ApplicableFlight.FlightSegmentReference)
        FlightSegmentReferenceData = []
        FlightSegmentReferences.forEach(FlightSegmentReference => {
          let MNAttr, MarketingName, CodeAttr, Code
          if (FlightSegmentReference && FlightSegmentReference.ClassOfService && typeof FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator !== "undefined") {
            MNAttr = {
              "CabinDesignator": FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator
            }
          }
          if (FlightSegmentReference && FlightSegmentReference.ClassOfService && typeof FlightSegmentReference.ClassOfService.Code.SeatsLeft !== "undefined") {
            CodeAttr = {
              "SeatsLeft": FlightSegmentReference.ClassOfService.Code.SeatsLeft
            }
          }
          CodeAttr ? Code = FlightSegmentReference.ClassOfService.Code["#text"] : Code = (FlightSegmentReference && FlightSegmentReference.ClassOfService) ? FlightSegmentReference.ClassOfService.Code: ""
          MNAttr ? MarketingName = FlightSegmentReference.ClassOfService.MarketingName["#text"] : MarketingName = (FlightSegmentReference && FlightSegmentReference.ClassOfService) ? FlightSegmentReference.ClassOfService.MarketingName : ""
          FSG = {
            "ClassOfService": {
              "attributes": {
                "ref": FlightSegmentReference.ClassOfService ? FlightSegmentReference.ClassOfService.ref : ""
              },
              "Code": {
                "attributes": CodeAttr ? CodeAttr : "",
                "text": Code
              },
              "MarketingName": {
                "attributes": {
                  "CabinDesignator": (FlightSegmentReference.ClassOfService && FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator) ? FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator : ""
                },
                "text": MarketingName
              },
            },
            "BagDetailAssociation":{
                "CheckedBagReferences":(FlightSegmentReference && FlightSegmentReference.BagDetailAssociation && FlightSegmentReference.BagDetailAssociation.CheckedBagReferences)?FlightSegmentReference.BagDetailAssociation.CheckedBagReferences : "",
                "CarryOnReferences":(FlightSegmentReference && FlightSegmentReference.BagDetailAssociation && FlightSegmentReference.BagDetailAssociation.CarryOnReferences)?FlightSegmentReference.BagDetailAssociation.CarryOnReferences : "",
            }
          }
          FlightSegmentReferenceData.push(FSG)
        });

        RA = {
          "AssociatedTraveler": {
            "TravelerReferences": {
              "text": RAssociation.AssociatedTraveler.TravelerReferences
            }
          },
          "ApplicableFlights": {
            "FlightSegmentReference": FlightSegmentReferenceData
          }
        }
        RequestAssociationsData.push(RA)
      });
      FareDetailData = []
      if (OfferPrice.FareDetail) {
        FareDetail = convertObj2Array(OfferPrice.FareDetail);
        if (FareDetail && Array.isArray(FareDetail)) {
          FareDetail.forEach(f => {
            if (f && f.FareComponent) {
              if (typeof f.FareComponent !== "undefined") {
                FareComponents = convertObj2Array(f.FareComponent)
                FareComponents.forEach(FareComponent => {
                  FC = {
                    "attributes": {
                      "refs": FareComponent.refs ? FareComponent.refs : ""
                    },
                    "SegmentReference": {
                      "text": FareComponent.SegmentReference
                    }
                  }
                  FareDetailData.push(FC)
                });
              }
            }
          });
        }
      }
      SegmentReferencesData = []
      if (typeof OfferPrice.RequestedDate.PriceDetail.SegmentReferences !== "undefined") {
        SegmentReferences = convertObj2Array(OfferPrice.RequestedDate.PriceDetail.SegmentReferences)
        SegmentReferences.forEach(SegmentReference => {
          SR = {
            "attributes": {
              "OnPoint": SegmentReference.OnPoint ? SegmentReference.OnPoint : "",
              "OffPoint": SegmentReference.OffPoint ? SegmentReference.OffPoint : "",
            },
            "text": SegmentReference["#text"]
          }
          SegmentReferencesData.push(SR)
        });
      }

      if (FareDetailData.length == 0) {
        OP = {
          "attributes": {
            "OfferItemID": OfferPrice.OfferItemID,
          },
          "RequestedDate": {
            "PriceDetail": {
              "TotalAmount": {
                "DetailCurrencyPrice": {
                  "Total": {
                    "attributes": {
                      "Code": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total.Code
                    },
                    "text": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total["#text"]
                  }
                }
              },
              "BaseAmount": {
                "attributes": {
                  "Code": OfferPrice.RequestedDate.PriceDetail.BaseAmount.Code
                },
                "text": OfferPrice.RequestedDate.PriceDetail.BaseAmount["#text"]
              },
              "Taxes": TaxesData,
              "SegmentReferences": SegmentReferencesData
            },
            "Associations": RequestAssociationsData
          }
        }
      } else {
        OP = {
          "attributes": {
            "OfferItemID": OfferPrice.OfferItemID,
          },
          "RequestedDate": {
            "PriceDetail": {
              "TotalAmount": {
                "DetailCurrencyPrice": {
                  "Total": {
                    "attributes": {
                      "Code": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total.Code
                    },
                    "text": OfferPrice.RequestedDate.PriceDetail.TotalAmount.DetailCurrencyPrice.Total["#text"]
                  }
                }
              },
              "BaseAmount": {
                "attributes": {
                  "Code": OfferPrice.RequestedDate.PriceDetail.BaseAmount.Code
                },
                "text": OfferPrice.RequestedDate.PriceDetail.BaseAmount["#text"]
              },
              "Taxes": TaxesData,
              "SegmentReferences": SegmentReferencesData
            },
            "Associations": RequestAssociationsData
          },
          "FareDetail": {
            "FareComponent": FareDetailData,
            "PriceClassReference": {
              "text": OfferPrice.FareDetail.PriceClassReference
            }
          }
        }
      }

      OfferPriceData.push(OP)
    });

    Associations = convertObj2Array(AirlineOffer.AirlineOffer.PricedOffer.Associations)
    AssociationsData = []
    Associations.forEach(Association => {
      FlightSegmentReferences = convertObj2Array(Association.ApplicableFlight.FlightSegmentReference)
      AssociationsFlightSegmentList = []
      FlightSegmentReferences.forEach(FlightSegmentReference => {
        let MNAttr, MarketingName, CodeAttr, Code;
        if (FlightSegmentReference.ClassOfService) {
          if (typeof FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator !== "undefined") {
            MNAttr = {
              "CabinDesignator": FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator
            }
          }
          if (typeof FlightSegmentReference.ClassOfService.Code.SeatsLeft !== "undefined") {
            CodeAttr = {
              "SeatsLeft": FlightSegmentReference.ClassOfService.Code.SeatsLeft
            }
          }
          CodeAttr ? Code = FlightSegmentReference.ClassOfService.Code["#text"] : Code = FlightSegmentReference.ClassOfService.Code
          MNAttr ? MarketingName = FlightSegmentReference.ClassOfService.MarketingName["#text"] : MarketingName = FlightSegmentReference.ClassOfService.MarketingName
          FS = {
            "ClassOfService": {
              "attributes": {
                "ref": FlightSegmentReference.ClassOfService.ref ? FlightSegmentReference.ClassOfService.ref : ""
              },
              "Code": {
                "attributes": CodeAttr,
                "text": Code
              },
              "MarketingName": {
                "attributes": {
                  "CabinDesignator": FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator ? FlightSegmentReference.ClassOfService.MarketingName.CabinDesignator : ""
                },
                "text": MarketingName
              },
            }
          }
          AssociationsFlightSegmentList.push(FS);
        }
      });

      OriginDestinationReferences = convertObj2Array(Association.ApplicableFlight.OriginDestinationReferences)
      AssociationsOriginDestinationReferences = []
      OriginDestinationReferences.forEach(OriginDestinationReference => {
        OR = {
          "text": OriginDestinationReference
        }
        AssociationsOriginDestinationReferences.push(OR)
      });

      FlightReferences = convertObj2Array(Association.ApplicableFlight.FlightReferences)
      AssociationsFlightReferences = []
      FlightReferences.forEach(FlightReference => {
        FR = {
          "text": FlightReference
        }
        AssociationsFlightReferences.push(FR)
      });

      AS = {
        "ApplicableFlight": {
          "FlightSegmentReference": AssociationsFlightSegmentList,
          "OriginDestinationReferences": AssociationsOriginDestinationReferences,
          "FlightReferences": AssociationsFlightReferences
        }
      }
      AssociationsData.push(AS)
    });

    Penalty = {
      "attributes": {
        "RefundableInd": Refundable,
      },
      "Details": PenaltyDetails
    }
    OtherLimitsData = []
    if (typeof AirlineOffer.AirlineOffer.TimeLimits !== "undefined") {
      OtherLimits = convertObj2Array(AirlineOffer.AirlineOffer.TimeLimits.OtherLimits)
      OtherLimits.forEach(OtherLimit => {
        if (OtherLimit.OtherLimit.TicketByTimeLimit == undefined) {
          OL = {
            "TicketByTimeLimit": {
              "TicketBy": ""
            }
          }
        } else {
          OL = {
            "TicketByTimeLimit": {
              "TicketBy": OtherLimit.OtherLimit.TicketByTimeLimit.TicketBy
            }
          }
        }
        OtherLimitsData.push(OL)
      });
    }

    OFNode = {
      "OfferID": {
        "attributes": {
          "Owner": AirlineOffer.AirlineOffer.OfferID.Owner,
          "ObjectKey": AirlineOffer.AirlineOffer.OfferID.ObjectKey
        },
        "text": AirlineOffer.AirlineOffer.OfferID["#text"]
      },
      "TimeLimits": {
        "OtherLimits": OtherLimitsData
      },
      "TotalPrice": {
        "DetailCurrencyPrice": {
          "Total": {
            "attributes": {
              "Code": AirlineOffer.AirlineOffer.TotalPrice.DetailCurrencyPrice.Total.Code
            },
            "text": AirlineOffer.AirlineOffer.TotalPrice.DetailCurrencyPrice.Total["#text"]
          }
        }
      },
      "Penalty": Penalty,
      "PricedOffer": {
        "OfferPrice": OfferPriceData,
        "Associations": AssociationsData
      }
    }
    Offer[AirlineOffer.AirlineOffer.OfferID["#text"]] = OFNode
  });

  // Metadata
  OMCE = {}
  CM = []
  for (const [key, Other] of Object.entries(MetadataList)) {
    OtherMetadatas = convertObj2Array(Other)
    CMData = {}
    OtherMetadatas.map((OtherMetadata) => {
      OMDs = convertObj2Array(OtherMetadata.OtherMetadata)
      OMDs.map((value) => {
        OMD = convertObj2Array(value)
        OMD.map(v => {
          if (typeof v.CurrencyMetadatas !== "undefined") {
            CMD = v.CurrencyMetadatas.CurrencyMetadata
            CMData = {
              "CurrencyMetadata": {
                "attributes": {
                  "MetadataKey": CMD.MetadataKey
                },
                "Decimals": CMD.Decimals,
                "Name": CMD.Name,
                "Application": CMD.Application
              }
            }
          }
          if (typeof v.EquivalentID_Metadatas !== "undefined") {
            EMDATAs = convertObj2Array(v.EquivalentID_Metadatas)
            EMDATAs.map((emdts) => {
              EMDs = emdts.EquivalentID_Metadata
              EMD = convertObj2Array(EMDs)
              EMDArr = []
              EMD.map(em => {
                EQD = convertObj2Array(em.EquivID)
                let EQAttr, Attr
                EQID = []
                EQD.map(e => {
                  if (typeof e.MetadataKey !== "undefined") {
                    EQAttr = {
                      "MetadataKey": e.MetadataKey
                    }
                  }
                  EQ = {
                    "attributes": EQAttr,
                    "EquivalentID_Key": e.EquivalentID_Key,
                    "ID_Value": e.ID_Value,
                    "Owner": e.Owner,
                  }
                  EQID.push(EQ)
                })
                if (typeof em.MetadataKey !== "undefined") {
                  Attr = {
                    "MetadataKey": em.MetadataKey
                  }
                }
                CD = {
                  "EquivalentID_Metadata": {
                    "attributes": Attr,
                    "EquivID": EQID
                  }
                }
                EMDArr.push(CD)
              })
              CMData = {
                "EquivalentID_Metadatas": EMDArr
              }
            })
          }
          if (typeof v.RuleMetadatas !== "undefined") {
            RMD = v.RuleMetadatas.RuleMetadata
            CMData = {
              "RuleMetadata": {
                "attributes": {
                  "MetadataKey": RMD.MetadataKey
                },
                "RuleID": RMD.RuleID,
                "Name": RMD.Name,
                "Values": {
                  "Value": {
                    "Instruction": RMD.Values.Value.Instruction
                  }
                },
                "Remarks": {
                  "Remark": RMD.Remarks.Remark
                }
              }
            }
          }
          CM.push(CMData)
        })
      })
      Metadata["OtherMetadata"] = CM
    });
  }

  return {
    "DataLists": DataLists,
    "AirlineOffer": Offer,
    "Metadata": Metadata,
  };
}

const returnJSON2XML = function (xmlData) {
  var options = {
    ignoreNameSpace: true,
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  return fastXmlParser.parse(xmlData, options);
}

module.exports = {
  convertXML2Json,
  flightPrice2Json,
  returnJSON2XML
};
