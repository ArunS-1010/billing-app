import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: 'Tamilnadu',
    amountReceived: '',
    dateTime: new Date().toLocaleString(),
  })

  const [submittedForms, setSubmittedForms] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedForms([...submittedForms, formData])
    setFormData({
      name: '',
      address: '',
      city: '',
      state: 'Tamilnadu',
      amountReceived: '',
      dateTime: new Date().toLocaleString(),
    })
  }

  const handleEdit = (index) => {
    setFormData(submittedForms[index])
    setSubmittedForms(submittedForms.filter((_, i) => i !== index))
  }

  const handleDelete = (index) => {
    setSubmittedForms(submittedForms.filter((_, i) => i !== index))
  }

  const handlePrint = (form) => {
    const printWindow = window.open('', '', 'height=600,width=800')
    printWindow.document.write('<html><head><title>Print Form</title>')
    printWindow.document.write(
      '<style>@media print { @page { size: A5; margin: 0.5in; } body { font-family: Arial, sans-serif; } .container { width: 100%; text-align: left; } .left { float: left; width: 40%; } .right { float: right; width: 60%; } }</style>'
    )
    printWindow.document.write('</head><body>')
    printWindow.document.write('<div class="container">')
    printWindow.document.write(
      '<div class="left"><strong>Name:</strong></div><div class="right">' +
        form.name +
        '</div>'
    )
    printWindow.document.write(
      '<div class="left"><strong>Address:</strong></div><div class="right">' +
        form.address +
        '</div>'
    )
    printWindow.document.write(
      '<div class="left"><strong>City:</strong></div><div class="right">' +
        form.city +
        '</div>'
    )
    printWindow.document.write(
      '<div class="left"><strong>State:</strong></div><div class="right">' +
        form.state +
        '</div>'
    )
    printWindow.document.write(
      '<div class="left"><strong>Amount Received:</strong></div><div class="right">' +
        form.amountReceived +
        '</div>'
    )
    printWindow.document.write(
      '<div class="left"><strong>Date & Time:</strong></div><div class="right">' +
        form.dateTime +
        '</div>'
    )
    printWindow.document.write('</div>')
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" value={formData.state} readOnly />
          </div>
          <div className="form-group">
            <label>Amount Received:</label>
            <input
              type="number"
              name="amountReceived"
              value={formData.amountReceived}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date & Time:</label>
            <input
              type="text"
              name="dateTime"
              value={formData.dateTime}
              readOnly
            />
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>

        <div>
          {submittedForms.length > 0 && (
            <div className="submitted-forms">
              <h2>Submitted Forms</h2>
              {submittedForms.map((form, index) => (
                <div
                  className="form-data"
                  key={index}
                  style={{ marginBottom: '20px' }}
                >
                  <div className="form-group">
                    <strong>Name:</strong> {form.name}
                  </div>
                  <div className="form-group">
                    <strong>Address:</strong> {form.address}
                  </div>
                  <div className="form-group">
                    <strong>City:</strong> {form.city}
                  </div>
                  <div className="form-group">
                    <strong>State:</strong> {form.state}
                  </div>
                  <div className="form-group">
                    <strong>Amount Received:</strong> {form.amountReceived}
                  </div>
                  <div className="form-group">
                    <strong>Date & Time:</strong> {form.dateTime}
                  </div>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handlePrint(form)}>Print</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Form
