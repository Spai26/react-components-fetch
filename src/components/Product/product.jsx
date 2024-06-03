/* eslint-disable react-hooks/rules-of-hooks */

const Product = () => {
  return (
    <>
      <form>
        <div>
          <div>
            <label>First name</label>
            <input type="text" id="first_name" placeholder="John" required />
          </div>
          <div>
            <label>List category</label>
            <input type="text" id="last_name" placeholder="Doe" required />
          </div>
          <div>
            <label>Select an option</label>
            <select multiple id="countries_multiple">
              <option selected>Choose category</option>
            </select>
          </div>
          <div>
            <label>Company</label>
            <input type="text" id="company" placeholder="Flowbite" required />
          </div>
          <div>
            <label>Phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label>Website URL</label>
            <input
              type="url"
              id="website"
              placeholder="flowbite.com"
              required
            />
          </div>
          <div>
            <label>Unique visitors (per month)</label>
            <input type="number" id="visitors" placeholder="" required />
          </div>
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            id="email"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="•••••••••"
            required
          />
        </div>
        <div>
          <label>Confirm password</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="•••••••••"
            required
          />
        </div>
        <div>
          <div>
            <input id="remember" type="checkbox" value="" required />
          </div>
          <label>
            I agree with the <a href="#">terms and conditions</a>.
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Product;
