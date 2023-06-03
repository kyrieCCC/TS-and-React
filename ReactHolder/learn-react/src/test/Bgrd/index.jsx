
const Bgrd = ({ bdrdsize = '2px', color = 'red' }) => {

    return (
        <div>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: bdrdsize,
                color: color
            }}>
                {color}
                look at my area
            </div>
        </div>
    )
}

export default Bgrd