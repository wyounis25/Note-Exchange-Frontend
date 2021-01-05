import React, { useState } from 'react';
import './Subject.css';
import { Button } from '@material-ui/core';
function Subject({ filterCategory, resetFields, setPrice }) {
	const [ cat, setCat ] = useState('');
	const [Order, setOrder] = useState(true)
	const handlePrice = () => {
		setOrder(!Order)
		setPrice()
	}
	
	// const sortPrice = (sortBy) => {
	// 	notes.sort((a, b) => {
	// 		if (a > b) return 1;
	// 		if (a < b) return -1;
	// 		return 0;
	// 	});
	// };

	const handleChange = (e) => {
		// console.log(e.target.textContent.toLowerCase())
		setCat(e.target.textContent.toLowerCase());
		filterCategory(cat);
	};

	return (
		<div className="subject__main">
			{/* <div className="subject__price">
				<labe>PRICE</labe>
				<select onClick={handlePrice} name ="price">
					<option value ="nothing"></option>
					<option value ="high">High to Low</option>
					<option value ="low">Low to High</option>
				</select> */}



				<div className="subject__standard">
					
				{/* <Button onClick={handlePrice}>
					PRICE
				</Button> */}
			{/* </div> */}
		
			<Button
				type="submit"
				id="subject__all"
			
				name="all"
				value="all"
				onClick={resetFields}
			>
				ALL
			</Button>
			
				</div>
				<div className="subject__scroll">
			<Button
				type="submit"
				className="subject__math"
			
				name="math"
				value="math"
				onClick={handleChange}
			>
				MATH
			</Button>
			<hr/>
			<Button
				className="subject__science"
				
				name="science"
				value="science"
				onClick={handleChange}
			>
				SCIENCE{' '}
			</Button>
			<hr/>
			<Button className="subject__history" value="history" onClick={handleChange}>
				HISTORY
			</Button>
			<hr/>
			<Button className="subject__art"  value="art" onClick={handleChange}>
				ART
			</Button>
			<hr/>
			<Button className="subject__economics" value="economics" onClick={handleChange}>
				ECONOMICS
			</Button>
			<hr/>
			<Button className="subject__finance" value="finance" onClick={handleChange}>
				FINANCE
			</Button>
			<hr/>
			<Button className="subject__engineering" value="engineering" onClick={handleChange}>
				ENGINEERING
			</Button>
			<hr/>
			<Button className="subject__physics" value="physics" onClick={handleChange}>
				PHYSICS
			</Button>
			<hr/>
			<Button className="subject__english" value="physics" onClick={handleChange}>
				ENGLISH
			</Button>
			<hr/>
			<Button className="subject__accounting" value="physics" onClick={handleChange}>
				ACCOUNTING
			</Button>
			<hr/>
			<Button className="subject__psycology" value="physics" onClick={handleChange}>
				PSYCOLOGY
			</Button>
			<hr/>
			<Button className="subject__robotics" value="physics" onClick={handleChange}>
				ROBOTICS
			</Button>
			<hr/>
			<Button className="subject__spanish" value="physics" onClick={handleChange}>
				SPANISH
			</Button>
			<hr/>
			<Button className="subject__geology" value="physics" onClick={handleChange}>
				GEOLOGY
			</Button>
		
		
			
		
		
	
			
			
				</div>
		</div>
	);
}

export default Subject;
