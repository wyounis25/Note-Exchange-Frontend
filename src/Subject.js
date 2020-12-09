import React, { useState } from 'react';
import './Subject.css';
import { Button } from '@material-ui/core';
function Subject({filterCategory,resetFields}) {
    const [ cat, setCat ] = useState('');
    
	const handleChange = (e) => {
        // console.log(e.target.textContent.toLowerCase())
		setCat(e.target.textContent.toLowerCase());
        filterCategory(cat);
        
    };
    
	return (
		<div className="subject__main">
			<Button type="submit" className="subject__all" variant="outlined" name="all" value="all"  onClick={resetFields}>
				ALL
			</Button>
			<Button type="submit" className="subject__math" variant="outlined" name="math" value="math"  onClick={handleChange}>
				MATH
			</Button>
			<Button className="subject__science" variant="outlined" name="science" value="science"  onClick={handleChange}>
				SCIENCE{' '}
			</Button>
			<Button className="subject__history" variant="outlined" value="history"  onClick={handleChange}>
				HISTORY
			</Button>
			<Button className="subject__art" variant="outlined" value="art"  onClick={handleChange}>
				ART
			</Button>
			<Button
				className="subject__economics"
				variant="outlined"
				value="economics"
				
				onClick={handleChange}
			>
				ECONOMICS
			</Button>
			<Button className="subject__finance" variant="outlined" value="finance"  onClick={handleChange}>
				FINANCE
			</Button>
			<Button
				className="subject__engineering"
				variant="outlined"
				value="engineering"
				
				onClick={handleChange}
			>
				ENGINEERING
			</Button>
			<Button className="subject__physics" variant="outlined" value="physics"  onClick={handleChange}>
				PHYSICS
			</Button>
		</div>
	);
}

export default Subject;
