import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [] = useState({

  })
  return (
    <form action="" method="POST" class="form-horizontal" role="form">
      <div class="form-group text-center">
        <legend>Distance Learning Feedback Form for Parents</legend>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Parent/Guardian Name</div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted">First Name</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted">Last Name</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Birth Date</div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="" id="">
              <option> </option>
              <option value="January"> January </option>
              <option value="February"> February </option>
              <option value="March"> March </option>
              <option value="April"> April </option>
              <option value="May"> May </option>
              <option value="June"> June </option>
              <option value="July"> July </option>
              <option value="August"> August </option>
              <option value="September"> September </option>
              <option value="October"> October </option>
              <option value="November"> November </option>
              <option value="December"> December </option>
            </select>
            <small id="" class="form-text text-muted">Month</small>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="" id="">
              <option> </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              <option value="6"> 6 </option>
              <option value="7"> 7 </option>
              <option value="8"> 8 </option>
              <option value="9"> 9 </option>
              <option value="10"> 10 </option>
              <option value="11"> 11 </option>
              <option value="12"> 12 </option>
              <option value="13"> 13 </option>
              <option value="14"> 14 </option>
              <option value="15"> 15 </option>
              <option value="16"> 16 </option>
              <option value="17"> 17 </option>
              <option value="18"> 18 </option>
              <option value="19"> 19 </option>
              <option value="20"> 20 </option>
              <option value="21"> 21 </option>
              <option value="22"> 22 </option>
              <option value="23"> 23 </option>
              <option value="24"> 24 </option>
              <option value="25"> 25 </option>
              <option value="26"> 26 </option>
              <option value="27"> 27 </option>
              <option value="28"> 28 </option>
              <option value="29"> 29 </option>
              <option value="30"> 30 </option>
              <option value="31"> 31 </option>
            </select>
            <small id="" class="form-text text-muted">Day</small>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group">
            <select class="form-control" name="" id="select-year">
              <option> </option>
              <option value="">  </option>
            </select>
            <small id="" class="form-text text-muted">Year</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="font-weight-bold mb-2">
            <div>Phone Number</div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted"></small>
          </div>
        </div>
        <div class="col-6">
          <div class="font-weight-bold mb-2">
            <div>Email</div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted">example@example.com</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Student's Name</div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted">First Name</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
            <small id="" class="form-text text-muted">Last Name</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Student's Grade Level</div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Website application the school is using</div>
        </div>
        <div class="col-12">
          <table class="table text-center table-bordered">
            <thead class="table-active">
              <tr>
                <th scope="col" class="bg-white"></th>
                <th scope="col">Not Satisfied</th>
                <th scope="col">Somewhat Satisfied</th>
                <th scope="col">Satisfied</th>
                <th scope="col">Very Satisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="table-active">Usability</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Navigation</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Accessibility</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Compatibility</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Media Usage</div>
        </div>
        <div class="col-12">
          <table class="table text-center table-bordered">
            <thead class="table-active">
              <tr>
                <th scope="col" class="bg-white"></th>
                <th scope="col">Not Satisfied</th>
                <th scope="col">Somewhat Satisfied</th>
                <th scope="col">Satisfied</th>
                <th scope="col">Very Satisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="table-active">Live Video Conferencing</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Stored Tutorial Videos</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Online Learning Materials</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Interactivity and Engagement</div>
        </div>
        <div class="col-12">
          <table class="table text-center table-bordered">
            <thead class="table-active">
              <tr>
                <th scope="col" class="bg-white"></th>
                <th scope="col">Not Satisfied</th>
                <th scope="col">Somewhat Satisfied</th>
                <th scope="col">Satisfied</th>
                <th scope="col">Very Satisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="table-active">Submitting Assignments</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Taking Exams</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Activities</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
              <tr>
                <th class="table-active">Communication</th>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
                <td class=""><input type="radio" class="form-check-input" name="" id=""
                  value="checkedValue" /></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>What are the things you like about our distance learning process/method?</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <textarea type="text" class="form-control" name="" id="" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>What are the things you DON'T like about our distance learning process/method?</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <textarea type="text" class="form-control" name="" id="" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Suggestions on how we can improve our teaching process</div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <textarea type="text" class="form-control" name="" id="" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Would you recommend our school to others?</div>
        </div>
        <div class="col-12">
          <div class="rate mb-3">
            <input type="radio" id="star10" name="rate" value="10" />
            <label for="star10" title="text">10 stars</label>
            <input type="radio" id="star9" name="rate" value="9" />
            <label for="star9" title="text">9 stars</label>
            <input type="radio" id="star8" name="rate" value="8" />
            <label for="star8" title="text">8 stars</label>
            <input type="radio" id="star6" name="rate" value="7" />
            <label for="star7" title="text">7 stars</label>
            <input type="radio" id="star6" name="rate" value="6" />
            <label for="star6" title="text">6 star</label>
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 font-weight-bold mb-2">
          <div>Would you recommend our school to others?</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="radio" id="" value="checkedValue" />
              Yes
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="radio" id="" value="checkedValue1" />
              No
            </label>
          </div>
        </div>
      </div>

      <div class="form-group text-center">
        <div class="col-sm-10 col-sm-offset-2">
          <button type="submit" class="btn btn-dark">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Feedback