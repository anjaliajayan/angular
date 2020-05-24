import { Action } from '@ngrx/store';
import { FlightSearchData } from './models/flight-search-data';

export enum FlightSearchActionTypes {
  LoadFlightSearchResult = '[FlightSearch] Result',
  FlightSearchResultError = '[FlightSearch] Error'
}

export class FlightSearchAction implements Action {
  type: string;
  payload: {
    data: FlightSearchData,
    error: string
  };
}

export class LoadFlightSearchResult implements Action {

  readonly type = FlightSearchActionTypes.LoadFlightSearchResult;

  constructor(readonly payload: {data: FlightSearchData}) {
  }
}

export class FlightSearchResultError implements Action {
  readonly type = FlightSearchActionTypes.FlightSearchResultError;

  constructor(readonly payload: {error: string}) {

  }
}

export type ActionsUnion = LoadFlightSearchResult | FlightSearchResultError;
