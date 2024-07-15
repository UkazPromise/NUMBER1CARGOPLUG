import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Rates = () => {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      question: `What is ${num1} + ${num2}?`,
      answer: num1 + num2
    };
  };

  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
    setIsAnswerCorrect(parseInt(value) === question.answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAnswerCorrect) {
      const form = e.target;
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      form.reset();
    }
  };

  return (
    <div className='h-96 my-4 bg-slate-300'>
      <div className='flex space-x-12'>
        <div className='mx-20'>
          <p className='font-extrabold text-2xl text-purple-600'>Get Rates</p>
          <p className='font-extrabold text-4xl text-slate-700'>Request Rates Free</p>
          <p className='text-gray-400 font-semibold'>
            Get the Rates to your favourite destinations. Enter the weight of your items in Kg 
            <br />and enter your destination and Rates will be delivered to your email
          </p>
        </div>
        <div className='bg-blue-600 p-4 rounded h-96'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input 
                type="text" 
                name="itemWeight" 
                id="itemWeight" 
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="Item Weight" 
              />
            </div>
            <div className='mb-4'>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="alex@alex.com" 
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="country" className='block text-white mb-1'>Select Receiver Country</label>
              <select 
                name="country" 
                id="country" 
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Select Receiver Country" 
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className='mb-4'>
              <p className='text-white mb-2'>{question.question}</p>
              <input 
                type="number" 
                name="answer" 
                id="answer" 
                value={answer}
                onChange={handleAnswerChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="Answer Correctly" 
              />
            </div>
            <button 
              type="submit"
              className={`block w-full rounded-md bg-green-500 text-white py-2 text-center font-bold hover:bg-green-600 ${!isAnswerCorrect && 'opacity-50 cursor-not-allowed'}`}
              disabled={!isAnswerCorrect}
            >
              Get Rate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rates;
