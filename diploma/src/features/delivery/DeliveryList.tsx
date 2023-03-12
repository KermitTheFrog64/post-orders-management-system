import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import {getDeliveryList} from "./delivery-slice"

const DeliveryList: React.FC = () => {
    const list = useAppSelector(getDeliveryList)
    return (
        <div>
            {
                list.map((item) => <div>{item.name}</div>)
            }
        </div>
    )
}

export default DeliveryList