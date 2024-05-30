export default function BMI(){
	
	return(
	<>
	<center>
	<div class="frame">
	<h1>BMI CALCULATOR</h1>
	<form>
	<span className="icon-input">
	<i className="gender-icon"></i>
	<select name="Gender" required>
	<option disabled selected>Select your Gender</option>
	<option>Male</option>
	<option>Female</option>
	</select>
	</span>
	<br/><br/>
	<input type="number" placeholder="Enter your age" required/>
	<br/><br/>
	<input type="number" placeholder="Enter your height in cm" required/>
	<br/><br/>
	<input type="number" placeholder="Enter your weight" required/>
	<br/><br/>
	<button class="cal">Calculate</button>
	<button class="clr">Clear</button>
	</form>
	</div>
	</center>
	</>
	);
} 