import {useState} from "react";
import axios from "axios";

const useRsvp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        allergies: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate form data
        if (!formData.name || !formData.phone || !formData.email) {
            setError('All fields are required except allergies');
            return;
        }

        try {
            const response = await axios.post('/api/rsvp', formData);
            setSuccess(response.data.message);
        } catch (error) {
            setError(error.response?.data?.error || 'An error occurred');
        }
    };

    return {
        formData,
        error,
        success,
        handleChange,
        handleSubmit,
        showForm,
        setShowForm
    }
}

export default useRsvp;