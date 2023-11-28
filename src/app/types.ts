import * as actions from './actions'
import {InferValueTypes} from "app/store";

export type AppActionTypes = ReturnType<InferValueTypes<typeof actions>>
