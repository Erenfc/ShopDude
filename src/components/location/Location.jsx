import React, { useState, useEffect } from 'react';

function UserAddress() {
    const [addressOptions, setAddressOptions] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(success, handleError);

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchAddress(latitude, longitude);
        }

        function handleError() {
            setError('Unable to retrieve your location');
        }
    }, []);

    const fetchAddress = async (latitude, longitude) => {
        const apiKey = '1806d224ce6b45c0b8f57dbe8fa85a44';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status.code === 200 && data.results.length > 0) {
                setAddressOptions(data.results.map(result => result.formatted));
            } else {
                setError('Failed to get address');
            }
        } catch (error) {
            setError('Failed to load address');
        }
    };

    return (
        <div>
            <h2>Select an Address</h2>
            {error ? <p>Error: {error}</p> : (
                <select value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)}>
                    {addressOptions.map((address, index) => (
                        <option key={index} value={address}>
                            {address}
                        </option>
                    ))}
                </select>
            )}
            {selectedAddress && <p>Selected Address: {selectedAddress}</p>}
        </div>
    );
}

export default UserAddress;
