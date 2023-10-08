import * as actions from './actions'
import {InferValueTypes} from "app/store";

export type ShopsActionTypes = ReturnType<InferValueTypes<typeof actions>>