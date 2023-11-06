import upDown from './REDUCERS/upDown'
import { createStoreHook } from 'react-redux'


const Store =createStoreHook(upDown,)

export default Store;
