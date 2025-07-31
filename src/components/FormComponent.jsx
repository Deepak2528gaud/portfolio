import React, { useState } from "react";



const FormComponent = ({ handleOnnSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOnnSubmit(formData);
        // setFormData({ name: "", email: "", message: "" });
    }


    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '40px auto',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}
        >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                        }}
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                        }}
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                        }}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;