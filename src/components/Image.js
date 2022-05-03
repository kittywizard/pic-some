export default function Image({className, url}) {

    const indexName = className.className;

    return (
        <div className={`${indexName} image-container`}>
            <img src={url} className="image-grid"/>
        </div>
    )
}