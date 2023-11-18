export const login = async (email, password) => {
	try {
		const res = await fetch('http://localhost:5000/api/auth/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email, password})
		});

		const data = await res.json();
  	return data;
	} catch (error) {
		console.log(error);
	}
}
