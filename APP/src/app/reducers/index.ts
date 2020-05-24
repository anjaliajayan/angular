import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FlightSearchActionTypes, FlightSearchAction } from './flight-search.actions';
import { FlightSearchData } from './models/flight-search-data';

export interface FlightSearchState {
  data: FlightSearchData | null;
  error: string| null;
}

const initialFlightSearchState: FlightSearchState = {
  data: null,
  error: null
};

export interface AppState {
  stateFlightSearch: FlightSearchState;
}

export function flightSearchReducer(state: FlightSearchState = initialFlightSearchState, action: FlightSearchAction): FlightSearchState {
  
  switch (action.type) {
    case FlightSearchActionTypes.LoadFlightSearchResult:
      return {
        data: action.payload.data,
        error: null
      };

    case FlightSearchActionTypes.FlightSearchResultError:
      return {
        data: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  stateFlightSearch: flightSearchReducer
};

export const selectFlightSearchData = (state: AppState) => state.stateFlightSearch.data;
export const selectFlightSearchError = (state: AppState) => state.stateFlightSearch.error;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
