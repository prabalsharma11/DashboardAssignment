const Modal = ({
  data,
  newWidgetName,
  newWidgetText,
  selectedCategory,
  addWidget,

  setNewWidgetName,
  setNewWidgetText,
  setSelectedCategory,
}) => {
  return (
    <div>
      <div className="modalforwidget">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add Widget +
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {' '}
                <div>
                  <select
                    className="dropdown1"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {data.map((category, index) => (
                      <option key={index} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                  <input
                    className="form-control mt-3 mb-3"
                    type="text"
                    placeholder="Widget Name"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                  />
                  <input
                    className="form-control mt-3 mb-3"
                    type="text"
                    placeholder="Widget Text"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                  />
                  <button class="btn btn-primary" onClick={addWidget}>
                    Add Widget
                  </button>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
