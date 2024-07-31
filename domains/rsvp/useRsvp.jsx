import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const useRsvp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        allergies: ''
    });
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.phone || !formData.email) {
            toast.error('All fields are required except allergies');
            return;
        }

        try {
            const response = await axios.post('/api/rsvp', formData);
            toast.success(response.data.message);
            setShowForm(false);
        } catch (error) {
            toast.error(error.response?.data?.error || 'An error occurred');
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        showForm
    }
};

export default useRsvp