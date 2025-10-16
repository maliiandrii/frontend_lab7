import React, { useState } from 'react';

const Header = () => {
    return (
        <h2>Малій Андрій Володимирович</h2>
    );
};

const Image = ({ images, imageWidth, onAddImage, onIncreaseImage, onDecreaseImage, onDeleteImage }) => {
    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.3s'
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {images.map(img => (
                    <a key={img.id} href="https://kyivcity.gov.ua/">
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                maxWidth: img.width + 'px',
                                height: 'auto',
                                display: 'block',
                                margin: '20px 0',
                                border: '2px solid #ddd'
                            }}
                        />
                    </a>
                ))}
            </div>
            <div style={{ margin: '20px 0' }}>
                <button onClick={onAddImage} style={buttonStyle}>Додати зображення</button>
                <button onClick={onIncreaseImage} style={buttonStyle}>Збільшити</button>
                <button onClick={onDecreaseImage} style={buttonStyle}>Зменшити</button>
                <button onClick={onDeleteImage} style={buttonStyle}>Видалити</button>
            </div>
        </div>
    );
};

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element5Clicked: false,
            element6Clicked: false
        };
    }

    handleElement5Click = () => {
        this.setState(prev => ({
            element5Clicked: !prev.element5Clicked
        }));
    }

    handleElement6Click = () => {
        this.setState(prev => ({
            element6Clicked: !prev.element6Clicked
        }));
    }

    render() {
        const { element5Clicked, element6Clicked } = this.state;

        const element5Style = {
            backgroundColor: element5Clicked ? '#FFD700' : 'transparent',
            color: element5Clicked ? '#8B0000' : '#333',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: '10px'
        };

        const element6Style = {
            backgroundColor: element6Clicked ? '#FF69B4' : 'transparent',
            color: element6Clicked ? '#FFFFFF' : '#333',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: '10px'
        };

        return (
            <div>
                <p>Місце народження: 16 серпня 2004 року, м. Кам'янець-Подільський</p>
                <p>Освіта: Кам'янець-Подільський Індустріальний Коледж <br />
                    Київський Політехнічний Інститут ім. Ігоря Сікорського</p>

                <h3 onClick={this.handleElement5Click} style={{ cursor: 'pointer' }}>
                    Хобі
                </h3>
                <ul
                    style={{
                        backgroundColor: element5Clicked ? '#87CEEB' : '#FFD700',
                        color: element5Clicked ? '#000080' : '#8B0000',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: '10px'
                    }}
                    onClick={this.handleElement5Click}
                >
                    <li>Рослини</li>
                    <li>Читання манг</li>
                    <li>Відеоігри</li>
                </ul>

                <h3
                    onClick={this.handleElement6Click}
                    style={{
                        backgroundColor: element6Clicked ? '#98FB98' : '#FF69B4',
                        color: element6Clicked ? '#006400' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: '10px'
                    }}
                >
                    Улюблені фільми
                </h3>
                <ol>
                    <li>Аліса у країні див</li>
                    <li>Закляття</li>
                    <li>Американська історія жахів: Готель</li>
                </ol>

                <h3>Моє улюблене місто</h3>
                <p>Київ — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині.
                    Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр
                    України. У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений
                    Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області.
                    Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і
                    громадських об'єднань, що працюють в Україні.</p>
            </div>
        );
    }
}

const GoodsCard = ({ id, name, price, photo }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
        }}>
            <img src={photo} alt={name} style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '4px',
                marginBottom: '10px'
            }} />
            <h4>{name}</h4>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#4CAF50' }}>{price} грн.</p>
        </div>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState('task1');
    const [images, setImages] = useState([
        { id: 1, src: 'https://турпоиск.kiev.ua/images/foto-blog/kyiv.jpg', alt: 'Київ', width: 600 }
    ]);

    const goods = [
        { id: 1, name: 'Грушка', price: 50, photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTajI7Uvby056vn7VrEW6aLL0JjctkDZxcAXJj82b2n3RpxBT9bS5uGg-xV2GT4eMAd69cipydKTbHrH0cpPz4Gw1H5m-a5QKuYdiIyUQk' },
        { id: 2, name: 'Яблучко', price: 45, photo: 'https://freshindiaorganics.com/cdn/shop/files/WhatsAppImage2024-11-22at3.33.45PM_2.jpg?v=1732270364' },
        { id: 3, name: 'Сливка', price: 60, photo: 'https://images.gastronom.ru/bEksFS5fxlwILKdRg5NitM8_Fu5RlgH4TemfFQoLQ3A/pr:product-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzZhZGQxN2NkLTQ1MTQtNDRiMC1hZTJjLWUxYThiZjMwMDcxNC5qcGc.webp' },
        { id: 4, name: 'Лимончик', price: 80, photo: 'https://www.tablycjakalorijnosti.com.ua/file/image/foodstuff/2d957d49310642d0/4a372d3c0cac506f' },
        { id: 5, name: 'Бананчик', price: 85, photo: 'https://winetime.com.ua/uploads/symlink/47000-48000/1585225128_63618.jpg' },
        { id: 6, name: 'Нектаринка', price: 70, photo: 'https://www.proto.gr/sites/www.proto.gr/files/styles/colorbox/public/images/fruits/nectarine2_1.png?itok=Al0MPxkf' },
        { id: 7, name: 'Мандаринка', price: 40, photo: 'https://fruit-time.ua/images/cache/products/57/mandarin-aixan-imp-500x500.jpeg' }
    ];

    const handleAddImage = () => {
        setImages([...images, {
            id: images.length + 1,
            src: 'https://турпоиск.kiev.ua/images/foto-blog/kyiv.jpg',
            alt: 'Київ',
            width: 600
        }]);
    };

    const handleIncreaseImage = () => {
        if (images.length > 0) {
            const newImages = [...images];
            newImages[newImages.length - 1].width += 50;
            setImages(newImages);
        }
    };

    const handleDecreaseImage = () => {
        if (images.length > 0) {
            const newImages = [...images];
            if (newImages[newImages.length - 1].width > 100) {
                newImages[newImages.length - 1].width -= 50;
                setImages(newImages);
            }
        }
    };

    const handleDeleteImage = () => {
        if (images.length > 1) {
            setImages(images.slice(0, -1));
        }
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        transition: 'background-color 0.3s'
    };

    const bodyStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        lineHeight: '1.6',
        backgroundColor: '#FFFFFF'
    };

    const navStyle = {
        marginBottom: '30px',
        display: 'flex',
        gap: '10px'
    };

    return (
        <div style={bodyStyle}>
            <div style={navStyle}>
                <button
                    onClick={() => setCurrentPage('task1')}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentPage === 'task1' ? '#2196F3' : '#4CAF50'
                    }}
                >
                    Завдання 1
                </button>
                <button
                    onClick={() => setCurrentPage('task2')}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentPage === 'task2' ? '#2196F3' : '#4CAF50'
                    }}
                >
                    Завдання 2
                </button>
            </div>

            {currentPage === 'task1' ? (
                <div>
                    <Header />
                    <Content />
                    <h3>Моє улюблене місто</h3>
                    <Image
                        images={images}
                        onAddImage={handleAddImage}
                        onIncreaseImage={handleIncreaseImage}
                        onDecreaseImage={handleDecreaseImage}
                        onDeleteImage={handleDeleteImage}
                    />
                </div>
            ) : (
                <div>
                    <h2>Галерея товарів</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                    }}>
                        {goods.map(good => (
                            <GoodsCard
                                key={good.id}
                                id={good.id}
                                name={good.name}
                                price={good.price}
                                photo={good.photo}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}