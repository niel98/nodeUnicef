import axios from 'axios'

const url = 'https://api-unicef.herokuapp.com/api/v1/zcoinv/list'

export const fetchData = async () => {
    try {

        const res = await axios.get(url)
        const modifiedRes = res.data.data.map(item => ({
            grant: item.grant,
            validToDate: item.validToDate,
            stock: item.stock,
            stockValue: item.stockValue,
            warehouseNumber: item.warehouseNumber,
            warehouseNumberDescription: item.warehouseNumberDescription,
            totalStock: item.totalStock,
            currency: item.currency,
            vendorSled: item.vendorSledBbd,
            pcrDescription: item.pcrDescription
        }))
        return modifiedRes
    } catch (err) {
        console.log(err.message)
    }
}