import * as actions from './actions'
import {InferValueTypes} from "app/store";

export type SnacksActionTypes = ReturnType<InferValueTypes<typeof actions>>