const SaveItem = ({ item }) => localStorage.setItem('waco', JSON.stringify(item))

const GetItem = () => localStorage.getItem('waco');

const CheckItem = () => GetItem() !== undefined && GetItem() !== null


export {
  SaveItem,
  GetItem,
  CheckItem
}