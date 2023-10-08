import * as actions from 'features/components/Snacks/model/actions'
import {InferValueTypes} from "app/store";

export type SnacksActionTypes = ReturnType<InferValueTypes<typeof actions>>