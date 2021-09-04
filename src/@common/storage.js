const SaveItem = ({ item }) =>
  localStorage.setItem('waco', JSON.stringify(item))

const GetItem = () => localStorage.getItem('waco')

const CheckItem = () =>
  GetItem() !== undefined && GetItem() !== null && GetItem() !== 'undefined'

export { SaveItem, GetItem, CheckItem }
