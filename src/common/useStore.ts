import React from 'react';
import { Store } from './Store';


export default function useStore() {
 const {state, dispatch} =  React.useContext(Store);
 return [state, dispatch];
}