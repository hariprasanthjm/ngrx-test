
import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item SUCCESS',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item FAILURE',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item SUCCESS',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item FAILURE',
  LOAD_SHOPPING  = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS  = '[SHOPPING] Load Shopping SUCCESS',
  LOAD_SHOPPING_FAILURE  = '[SHOPPING] Load Shopping FAILURE'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) { }
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: string) { }
}
export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) { }
}

export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;

  constructor(public payload: string) { }
}
export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: Array<ShoppingItem>) { }
}

export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;

  constructor(public payload: Error) { }
}

export type ShoppingAction = | AddItemAction
                             | AddItemSuccessAction
                             | AddItemFailureAction
                             | DeleteItemAction
                             | DeleteItemSuccessAction
                             | DeleteItemFailureAction
                             | LoadShoppingAction
                             | LoadShoppingSuccessAction
                             | LoadShoppingFailureAction;
