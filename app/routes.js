const base = 'https://localhost:44317'
const routes = {
    getAllCategories: `${base}/api/Category/GetAll`,
    getAllAdvertises: `${base}/api/Advertise/GetAll`,
    getFeaturedAdvertises: `${base}/api/Advertise/Featured/Get`,
    getAdvertiseByCategory: (id => `${base}/api/Advertise/GetByCategory/${id}`),
    createAdvertise: `${base}/api/Advertise/Create`
}
const postFormValue = async (url, data) => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
        console.log(key, value)
        formData.append(key, value)
    }
 
    try {
        let res =  await fetch(url, {
            method: 'POST',
            body: formData
        })
        let result = await res.json()
        return result
    } catch (e) {
        return e
    }
}