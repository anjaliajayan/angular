



module.exports = {
    getFlightSearchStats : ( data, report ) => {
    
        var keys=[], tickets=[], searches=[];
        var tags = {};
        if( report == 'week' ){
            var days = {
                1: 'Mon',
                2: 'Tue',
                3: 'Wed',
                4: 'Thu',
                5: 'Fri',
                6: 'Sat',
                0: 'Sun',
            }
            var arr = []
            data.forEach(element => {
                var tag = days[ new Date(element.created_at).getDay() ];
                arr.push( new Date(element.created_at).getDay() )
                if( ! tags[ tag ] )
                    tags[tag]= { search:0, ticket:0, tag: tag }
                if( element.updateFrom == 'search')
                    tags[tag].search++;
                if( element.updateFrom == 'ticket')
                    tags[tag].ticket++;
                
            });
    
            
            Object.keys(tags).forEach(element => {
                var obj = tags[ element ];
                
                keys.push( obj.tag );
                tickets.push( obj.ticket );
                searches.push( obj.search )
            });
        }
        
    
        return {keys, searches, tickets};
    },

    getPerformanceStats : (data, report, timespan) => {
        
        // // console.log('dddddddd ', timespan)
        var supplier_price = [];
        var markup_price = [];
        var total_achieved = []
    
    
    
        var tags = [], tagsObj = {}, getTag = function(created_at){return ''};
    
        if(report == 'year'){
            tags = [
                '1st Quarter',
                '2nd Quarter',
                '3rd Quarter',
                '4th Quarter'
            ];
            tagsObj = {
                '1st Quarter': {val:'1st Quarter', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '2nd Quarter': {val:'2nd Quarter', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '3rd Quarter': {val:'3rd Quarter', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '4th Quarter': {val:'4th Quarter', supplier_price: 0, markup_price: 0, total_achieved: 0 }
            };
            getTag = function(created_at){
                var _date = new Date( created_at );
                if( _date < new Date(new Date().getFullYear(), 3, 1, 0, 0, 0, 0) )
                    return tags[0];
                if( _date < new Date(new Date().getFullYear(), 6, 1, 0, 0, 0, 0) )
                    return tags[1];
                if( _date < new Date(new Date().getFullYear(), 9, 1, 0, 0, 0, 0) )
                    return tags[2];
                else
                    return tags[3];
            } 
        }
    
        if(report == 'month'){
            tags = [
                '1-6',
                '7-11',
                '12-16',
                '17-23',
                '24-31'
            ];
            tagsObj = {
                '1-6': {val:'1-6', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '7-11': {val:'7-11', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '12-16': {val:'12-16', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '17-23': {val:'17-23', supplier_price: 0, markup_price: 0, total_achieved: 0 },
                '24-31': {val:'24-31', supplier_price: 0, markup_price: 0, total_achieved: 0 }
            };
            getTag = function(created_at){
                var _date = new Date( created_at );
                if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0, 0) )
                    return tags[0];
                if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 12, 0, 0, 0, 0) )
                    return tags[1];
                if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 17, 0, 0, 0, 0) )
                    return tags[2];
                if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 24, 0, 0, 0, 0) )
                    return tags[3];
                return tags[4];
                
            } 
        }

        if( report == 'custom' ){
            var tags = getTagsBWDateSpans( timespan );
            

            tags.forEach(element => {
                tagsObj[ element.display ] = {
                    val : element.display,
                    supplier_price: 0,
                    markup_price: 0,
                    total_achieved: 0
                }
            });

            getTag = function(created_at){
                var _date = new Date( created_at );
                var output = null;
                for(var i =0;i<tags.length; i++){
                    var element = tags [i]
                    if( element.range.start <= _date && _date < element.range.end ){
                        return element;
                        output = element;
                        break; 
                    }

                };
                return output;
                // if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0, 0) )
                //     return tags[0];
                // if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 12, 0, 0, 0, 0) )
                //     return tags[1];
                // if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 17, 0, 0, 0, 0) )
                //     return tags[2];
                // if( _date < new Date(new Date().getFullYear(), new Date().getMonth(), 24, 0, 0, 0, 0) )
                //     return tags[3];
                // return tags[4];
                
            } 
        }
        // // console.log(data)
        data.forEach(element => {
            var tag = getTag( element.created );
            if( tag != null ){
                tag = tag.display;
                if( element.supplier_price != null ){
                    tagsObj[ tag ].supplier_price = tagsObj[ tag ].supplier_price + parseInt(element.supplier_price);
                }
                if( element.markup_price != null ){
                    tagsObj[ tag ].markup_price = tagsObj[ tag ].markup_price + parseInt(element.markup_price);
                }
                if( element.markup_price != null ){
                    tagsObj[ tag ].total_achieved = tagsObj[ tag ].total_achieved+ parseInt(element.markup_price);
                }
            }
            
        });
    
        var tmptags = [];
        for (let jj = 0; jj < tags.length; jj++) {
            const element = tags[jj];
            tmptags.push( element.display );
        }

        Object.keys( tagsObj ) .forEach(element => {
            element = tagsObj[ element ]
            // // console.log(element)
            supplier_price.push( element.supplier_price );
            markup_price.push( element.markup_price );
            total_achieved.push( element.total_achieved )
        });
        return { tags: tmptags, supplier_price, markup_price, total_achieved };
    },

    getProductivityStas : (data, report, timespan) => {
        
        var tagsData ={}, keys =[], bookings= [], getTag = function(created_at){return ''};
        var tags = [];
        if(report == 'month'){
            tagsData = {}
            keys = [
                '1 to 6',
                '7 to 11',
                '12 to 16',
                '17 to 23',
                'after 24'
            ]
            getTag = function( created_at ){
                var created_at = new Date( created_at );
                if( created_at.getDate() <7 )
                    return '1 to 6';
                if( created_at.getDate() <12 )
                    return '7 to 11';
                if( created_at.getDate() <17 )
                    return '12 to 16';
                if( created_at.getDate() <24 )
                    return '17 to 23';
                if( created_at.getDate() >=24 )
                    return 'after 24';
                return '';
            }
        }

        if(report == 'day'){
            tagsData = {}
            keys = [
                '01:00 to 06:00',
                '06:00 to 12:00',
                '12:00 to 18:00',
                '18:00 to 24:00',
            ]
            getTag = function( created_at ){
                var created_at = new Date( created_at );
                if( created_at < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 7, 0, 0, 0) )
                    return keys[0];
                if( created_at < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 13, 0, 0, 0) )
                    return keys[1];
                if( created_at < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 19, 0, 0, 0) )
                    return keys[2];
                return keys[3];
            }
        }

        if( report == 'custom' ){
            tags = getTagsBWDateSpans( timespan );

            // tags.forEach(element => {
            //     tagsData[ element.display ] = {
            //         val : element.display,
            //         count: 0
            //     }
            // });
            getTag = function(created_at){
                var _date = new Date( created_at );
                var output = null;
                for(var i =0;i<tags.length; i++){
                    var element = tags [i]
                    if( element.range.start <= _date && _date < element.range.end ){
                        return element;
                    }

                };
                return output;     
            } 
        }

        data.forEach(element => {
            if( !tagsData[ 'element.agent_code' ] ){
                tagsData[ 'element.agent_code' ] = {}
                // // console.log('keys are ', keys)
                tags.forEach(tagVal => {
                    tagsData[ 'element.agent_code' ][ tagVal.display ] = 0;
                });
            }
                
            var tag = getTag( element.created );
            if( tag != null )
                tagsData[ 'element.agent_code' ][ tag.display ]++;
        })
        // // console.log('data ', tagsData)
        Object.keys( tagsData ).forEach(element => {
            var tmp = [];
            var obj = tagsData[ element ];
            Object.keys( obj ) .forEach(element => {
                tmp.push( obj[ element ] )
            });
            bookings.push( tmp )

        });

        var tmpKeys  =[];
        tags.forEach(element => {
            tmpKeys.push( element.display )
        });

        return { bookings, keys: tmpKeys };
    },

    getYearSpan : ()=>{
        return {
            searchFrom : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0),
            searchTo : new Date(new Date().getFullYear()+1, 0, 1, 0, 0, 0, 0)
        }
    },

    getMonthSpan : ()=>{
        return {
            searchFrom : new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0, 0),
            searchTo : new Date(new Date().getFullYear(), new Date().getMonth()+1, 1, 0, 0, 0, 0)
        }
    },

    getDaySpan : ()=>{
        return {
            searchFrom : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0),
            searchTo : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1, 0, 0, 0, 0)
        }
    },



}



var getTagsBWDateSpans = function ( timespan ) {

    const diffTime = Math.abs( timespan.searchTo - timespan.searchFrom);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        if( diffDays >=4 ){
            var spanDays = diffDays / 4;
            spanDays = Math.ceil( spanDays )
            var tags = []
            var _start = new Date( timespan.searchFrom );
            var _end = new Date( timespan.searchTo );
            while(_start < _end){
                var tmp = new Date( _start );
                tmp.setDate( tmp.getDate() + spanDays )
                if(tmp> _end)
                    tmp = _end;
                tags.push( {
                    range: { start: _start, end: tmp },
                    display: getDateOnly( _start, 0 ) + ' to '+ getDateOnly( tmp, 1 )
                } );
                _start = tmp;
            }
            return tags;
            // // console.log('tags are ',tags )
        }
        return [];
    
}

var getDateOnly = function( dateObj, chk ) {
    
    // if(chk == 1)
    //     dateObj.setDate( dateObj.getDate() -1 )

    var tmpDO = new Date( dateObj );
    var _year = tmpDO.getFullYear();
    
    // // console.log('date ', tmpDO )
    if( chk == 1 ){
        tmpDO.setDate( dateObj.getDate() - 1 ) 
    }
    // // console.log( tmpDO )
    var _date = tmpDO.getDate();  


    var _month = tmpDO.getMonth() + 1;
    if( _date < 10)
        _date = '0'+_date 
    if( _month < 10 )
        _month = '0'+_month;
    return _year+'-'+_month+'-'+_date;
}