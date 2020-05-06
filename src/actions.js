import { ADD, REMOVE } from "./actionTypes";

export function add(id) {
  return {type: ADD, id}
}

export function remove(id) {
  return {type: REMOVE, id}
}