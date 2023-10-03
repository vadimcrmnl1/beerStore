import * as actions from './actions'
import {InferValueTypes} from "app/store";

export type CartActionsType = ReturnType<InferValueTypes<typeof actions>>