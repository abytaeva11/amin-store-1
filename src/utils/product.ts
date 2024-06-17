import { PRODUCT } from "src/constants"

const getObject = (type: string, data?: ProductType[]) => {
    return data?.filter(el => el.category === type)
        .map(el => ({ value: `${el.id}`, label: `${el.title}` }))
}

export const selectGenerator = (data?: ProductType[]) => {

    const cpuId = getObject(PRODUCT.cpu, data)
    const bodyId = getObject(PRODUCT.body, data)
    const coolerId = getObject(PRODUCT.cooler, data)
    const motherboardId = getObject(PRODUCT.motherboard, data)
    const ramId = getObject(PRODUCT.ram, data)
    const videoCardId = getObject(PRODUCT.videoCard, data)
    const hddId = getObject(PRODUCT.hdd, data)
    const disk1Id = getObject(PRODUCT.disk1, data)
    const disk2Id = getObject(PRODUCT.disk2, data)
    const dvdId = getObject(PRODUCT.dvd, data)
    const soundCardId = getObject(PRODUCT.soundCard, data)
    const mouseId = getObject(PRODUCT.mouse, data)
    const keyboardId = getObject(PRODUCT.keyboard, data)
    const monitorId = getObject(PRODUCT.monitor, data)
    const headsetId = getObject(PRODUCT.headset, data)
    return {
        cpuId, coolerId, monitorId, motherboardId, ramId,
        videoCardId, hddId, disk1Id, disk2Id, dvdId, soundCardId,
        mouseId, keyboardId, headsetId, bodyId
    }
}
