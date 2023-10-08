import * as actions from 'features/Cart/model/actions'
import {InferValueTypes} from "app/store";

export type CartActionsType = ReturnType<InferValueTypes<typeof actions>>