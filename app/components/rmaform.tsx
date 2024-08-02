import React, { useState } from 'react';

const RMAForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    purchaseDate: '',
    productName: '',
    productSKU: '',
    quantity: 1,
    reason: '',
    condition: '',
    action: '',
    comments: '',
    returnAddress: '',
    shippingMethod: '',
    agree: false,
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          orderNumber: '',
          purchaseDate: '',
          productName: '',
          productSKU: '',
          quantity: 1,
          reason: '',
          condition: '',
          action: '',
          comments: '',
          returnAddress: '',
          shippingMethod: '',
          agree: false,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred while sending your request.');
      }
    } catch (error) {
      setError('An error occurred while sending your request.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Return Merchandise Authorization (RMA) Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* ... input fields as shown in your code ... */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Reason for Return</label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a reason</option>
                <option value="Wrong Item Received">Wrong Item Received</option>
                <option value="Damaged Item">Damaged Item</option>
                <option value="Item Not as Described">Item Not as Described</option>
                <option value="Changed Mind">Changed Mind</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* ... other form fields ... */}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          {success && <p className="mt-4 text-green-600">Your return request has been submitted successfully.</p>}
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RMAForm;
