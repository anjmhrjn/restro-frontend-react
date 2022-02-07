import { useForm } from "react-hook-form";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-8 col-md-9 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="col-form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name && "invalid"}`}
                    {...register("name", { required: "Name is Required" })}
                    onKeyUp={() => {
                        trigger("name");
                    }}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>
                <div className="form-group">
                  <label className="col-form-label">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("age", {
                      required: "Age is Required",
                      min: { value: 13, message: "Minimum Required age is 13" },
                      pattern: {value: /^[0-9]+$/, message: "Only numbers are allowed"}
                    })}
                    onKeyUp={() => {
                        trigger("age");
                    }}
                  />
                  {errors.age && (
                    <small className="text-danger">{errors.age.message}</small>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
