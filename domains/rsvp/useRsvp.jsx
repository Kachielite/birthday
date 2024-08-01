// domains/rsvp/useRsvp.jsx
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
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSendingEmail(true);
        const toastId = toast.loading("RSVP in progress...");

        // Validate form data
        if (!formData.name || !formData.phone || !formData.email) {
            toast.update(toastId, { render: 'All fields are required except allergies', type: 'error', isLoading: false, autoClose: 5000 });
            setIsSendingEmail(false);
            return;
        }

        try {
            const response = await axios.post('/api/rsvp', formData);
            toast.update(toastId, { render: response.data.message, type: 'success', isLoading: false, autoClose: 5000 });
            setShowForm(false);
        } catch (error) {
            toast.update(toastId, { render: error.response?.data?.error || 'An error occurred', type: 'error', isLoading: false, autoClose: 5000 });
        } finally {
            setIsSendingEmail(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        showForm,
        setShowForm,
        isSendingEmail
    }
};

export default useRsvp;