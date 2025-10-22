import { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import '../App.css'; // adjust path if needed

const Signup = () => {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianContact, setGuardianContact] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!username || !contact || !guardianName || !guardianContact || !aadhar || !age || !gender) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = {
      username,
      contact,
      guardianName,
      guardianContact,
      aadhar,
      age,
      gender,
    };

    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');

    setUsername('');
    setContact('');
    setGuardianName('');
    setGuardianContact('');
    setAadhar('');
    setAge('');
    setGender('');
  };

  return (
    <div className="whole-container">
      <h2 className="heading-txt">Login In</h2>

      <h5 className="inp-txt">Patient Name</h5>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Eg.John Doe"
      />

      <h5 className="inp-txt">Contact No.</h5>
      <Input
        type="number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Eg.1234567890"
      />

      <h5 className="inp-txt">Guardian Name</h5>
      <Input
        type="text"
        value={guardianName}
        onChange={(e) => setGuardianName(e.target.value)}
        placeholder="Eg.John Doe"
      />
      <h5 className="inp-txt">Guardian Contact No.</h5>
      <Input
        type="number"
        value={guardianContact}
        onChange={(e) => setGuardianContact(e.target.value)}
        placeholder="Eg.1234567890"
      />
      <h5 className="inp-txt">Aadhar no.</h5>
      <Input
        type="number"
        value={aadhar}
        onChange={(e) => setAadhar(e.target.value)}
        placeholder="1234 1234 1234"
      />

      <Select value={age} onValueChange={setAge}>
        <SelectTrigger>
          <SelectValue placeholder="Select Age" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 83 }, (_, i) => i + 18).map((ageValue) => (
            <SelectItem key={ageValue} value={ageValue.toString()}>
              {ageValue}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div></div>

      <Select value={gender} onValueChange={setGender}>
        <SelectTrigger>
          <SelectValue placeholder="Select Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="nonbinary">Non-binary</SelectItem>
          <SelectItem value="preferNotToSay">Prefer not to say</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <button className="signup-btn" onClick={handleSubmit}>Sign Up</button>

      <p className="login-txt">Have an account?  <a href="/login">Login Here</a></p>
    </div>
  );
};

export default Signup;
