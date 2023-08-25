const IsWeedLegalState = ({head , description2}) => {

    return (
        <>
            <div className="col-12">
 
                <h2 id="isweedLegalHeadings" className="isweedLegalHeading">{head}</h2>

                <div className="col-12" id={head} >
                    <p className="isWeedLegalParagraph">
                       {description2}
                    </p>
                </div>

            </div>

        </>
    )
}
export default IsWeedLegalState