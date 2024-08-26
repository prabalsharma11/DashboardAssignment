import React, { useState } from 'react'
import './main.css'
import Modal from './Modal'
import { initialData } from './Jsondata'

const Dashboard = () => {
  const [data, setData] = useState(initialData)
  const [newWidgetName, setNewWidgetName] = useState('')
  const [newWidgetText, setNewWidgetText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const addWidget = () => {
    if (selectedCategory && newWidgetName && newWidgetText) {
      const updatedData = data.map((category) => {
        if (category.category === selectedCategory) {
          return {
            ...category,
            widgets: [
              ...category.widgets,
              { name: newWidgetName, text: newWidgetText },
            ],
          }
        }
        return category
      })
      setData(updatedData)
      setNewWidgetName('')
      setNewWidgetText('')
    }
  }

  const removeWidget = (categoryName, widgetName) => {
    const updatedData = data.map((category) => {
      if (category.category === categoryName) {
        return {
          ...category,
          widgets: category.widgets.filter(
            (widget) => widget.name !== widgetName
          ),
        }
      }
      return category
    })
    setData(updatedData)
  }

  return (
    <section>
      <div className="container-fluid d-flex">
        <a href="#"> Dashboard</a>
        <div class="search input-group ">
          <input
            type="text"
            class="form-control"
            placeholder="Search here.."
            aria-label="Search here.."
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="container main">
        <div className="d-flex ">
          <h3>Dynamic Dashboard</h3>
          <div>
            <Modal
              data={data}
              newWidgetName={newWidgetName}
              newWidgetText={newWidgetText}
              selectedCategory={selectedCategory}
              addWidget={addWidget}
              setNewWidgetName={setNewWidgetName}
              setNewWidgetText={setNewWidgetText}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        {data.map((category, index) => (
          <div className="category" key={index}>
            <h5>{category.category}</h5>

            <div className="box">
              {category.widgets.map((widget, widgetIndex) => (
                <div className="content" key={widgetIndex}>
                  <strong>{widget.name}:</strong> {widget.text}
                  <button
                    className=" butt btn btn-primary"
                    onClick={() => removeWidget(category.category, widget.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="content">
                <Modal
                  data={data}
                  newWidgetName={newWidgetName}
                  newWidgetText={newWidgetText}
                  selectedCategory={selectedCategory}
                  addWidget={addWidget}
                  setNewWidgetName={setNewWidgetName}
                  setNewWidgetText={setNewWidgetText}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
