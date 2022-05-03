import { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import getClass from "../utils/getClass";

export default function Photos() {

    const {picsArray} = useContext(Context);
        //pulling from CONTEXT object not the PROVIDER COMPONENT

    const picsMap = picsArray.map((pic, index) => {
        return <Image
                    url={pic.url}
                    key={pic.id}
                    className={getClass(index)}
                />
    })
    

    return (
        <section className="photos">
            {picsMap}
        </section>
    )
}