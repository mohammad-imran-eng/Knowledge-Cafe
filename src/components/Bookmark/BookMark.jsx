import './BookMark.css'

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className="font-style-property">{title}</h1>
        </div>
        
    );
};

export default BookMark;