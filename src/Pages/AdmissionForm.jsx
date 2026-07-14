import React, { useEffect, useMemo, useState } from "react"
import successIcon from "../Assets/verify.png"

const academicYears = [
	{ name: "2025-2026", id: 11 },
]

const fallbackStandards = [
	{ id: 1, name: "+1 Science" },
	{ id: 2, name: "+1 Commerce" },
	{ id: 3, name: "+2 Admission" },
]

const fallbackFields = [
	{ name: "name", title: "Student Full Name", type: "text", required: true },
	{ name: "dob", title: "Date of Birth", type: "date", required: true },
	{ name: "mobile", title: "Mobile Number", type: "tel", required: true },
	{ name: "whats_app", title: "WhatsApp Number", type: "tel", required: false },
	{ name: "email", title: "Email Address", type: "email", required: false },
	{ name: "father_name", title: "Father Name", type: "text", required: false },
	{ name: "mother_name", title: "Mother Name", type: "text", required: false },
	{ name: "place", title: "Place", type: "text", required: false },
	{ name: "district", title: "District", type: "text", required: false },
	{ name: "last_school", title: "Previous School", type: "text", required: false },
]

const fieldGroups = [
	{
		title: "Student Details",
		names: ["name", "full_initial", "dob", "word_dob", "gender", "blood_group", "religion", "caste", "aadhaar", "mother_tongue", "is_single_girl", "is_disabled"],
	},
	{
		title: "Contact & Family",
		names: ["mobile", "whats_app", "email", "father_name", "father_phone", "father_email", "father_qualification", "father_occupation", "father_income", "mother_name", "mother_phone", "mother_email", "mother_qualification", "mother_occupation", "mother_income", "guardian", "relationship", "guardian_address"],
	},
	{
		title: "Address & Previous School",
		names: ["house_name", "local_name", "local_body", "ration_card_type", "pin_code", "post", "place", "block", "taluk", "district", "state", "nationality", "last_school", "last_school_affiliation", "tc_no", "tc_issue_date", "id_mark", "father_job_title"],
	},
]

const payloadKeys = [
	"mobile",
	"whats_app",
	"email",
	"name",
	"full_initial",
	"word_dob",
	"gender",
	"blood_group",
	"religion",
	"caste",
	"aadhaar",
	"mother_tongue",
	"house_name",
	"local_name",
	"local_body",
	"ration_card_type",
	"pin_code",
	"post",
	"place",
	"block",
	"taluk",
	"district",
	"state",
	"nationality",
	"is_disabled",
	"father_name",
	"father_phone",
	"father_income",
	"father_email",
	"father_qualification",
	"father_occupation",
	"mother_name",
	"mother_occupation",
	"mother_email",
	"mother_phone",
	"mother_qualification",
	"mother_income",
	"guardian",
	"relationship",
	"guardian_address",
	"last_school",
	"last_school_affiliation",
	"tc_no",
	"id_mark",
	"father_job_title",
]

const mapConfigField = (config) => {
	const fieldTypes = {
		str: "text",
		standard: "text",
		school: "text",
		ration_card_type: "text",
		yes_no: "select",
		local_body: "text",
		int: "number",
		date: "date",
	}
	const phoneFields = ["mobile", "whats_app", "phone", "father_phone", "mother_phone"]
	const numberFields = ["aadhaar", "pin_code"]

	let type = fieldTypes[config.type] || "text"
	if (phoneFields.includes(config.column_name)) type = "tel"
	if (numberFields.includes(config.column_name)) type = "number"
	if (config.column_name === "email" || config.column_name === "father_email" || config.column_name === "mother_email") {
		type = "email"
	}

	return {
		name: config.column_name,
		title: config.title,
		type,
		required: config.is_required,
		defaultValue: config.default_value,
		isYesNo: config.type === "yes_no",
	}
}

const emptyToNull = (value) => (value === undefined || value === "" ? null : value)

const toApiDate = (value) => {
	if (!value) return null
	return new Date(value).toISOString().slice(0, 19).replace("T", " ")
}

const AdmissionForm = () => {
	const [formFields, setFormFields] = useState(fallbackFields)
	const [formData, setFormData] = useState({})
	const [selectedAcademicYear, setSelectedAcademicYear] = useState("")
	const [standards, setStandards] = useState(fallbackStandards)
	const [selectedStandard, setSelectedStandard] = useState("")
	const [alert, setAlert] = useState({ message: "", type: "" })
	const [isLoading, setIsLoading] = useState(true)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccessPopup, setShowSuccessPopup] = useState(false)

	useEffect(() => {
		const fetchFormConfig = async () => {
			try {
				const response = await fetch("https://api.sirajulhuda.com/api/v1/erp/admission-application-config/58")
				const result = await response.json()
				const institutionFormConfigs = result?.data?.config || []

				const updatedFormFields = institutionFormConfigs
					.filter((config) => config.visibility === true)
					.map(mapConfigField)

				if (updatedFormFields.length > 0) {
					setFormFields(updatedFormFields)
				}
				
				const standardsResponse = await fetch("https://api.sirajulhuda.com/api/v1/erp/school/standards/list/27")
				const standardsResult = await standardsResponse.json()
				if (Array.isArray(standardsResult?.data) && standardsResult.data.length > 0) {
					setStandards(standardsResult.data)
				}
			} catch (error) {
				console.error("Error fetching form config:", error)
				setAlert({
					message: "Live admission fields could not be loaded, so a basic application form is shown.",
					type: "warning",
				})
			} finally {
				setIsLoading(false)
			}
		}

		fetchFormConfig()
	}, [])

	const groupedFields = useMemo(() => {
		const fieldMap = new Map(formFields.map((field) => [field.name, field]))
		const used = new Set()

		const groups = fieldGroups
			.map((group) => {
				const fields = group.names
					.map((name) => fieldMap.get(name))
					.filter(Boolean)

				fields.forEach((field) => used.add(field.name))
				return { title: group.title, fields }
			})
			.filter((group) => group.fields.length > 0)

		const remainingFields = formFields.filter((field) => !used.has(field.name))
		if (remainingFields.length > 0) {
			groups.push({ title: "Additional Details", fields: remainingFields })
		}

		return groups
	}, [formFields])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const buildPayload = () => {
		const payload = {
			year_id: Number(selectedAcademicYear),
			institution_id: 27,
			standard_id: Number(selectedStandard),
			dob: toApiDate(formData.dob),
			tc_issue_date: toApiDate(formData.tc_issue_date),
			is_single_girl: true,
		}

		payloadKeys.forEach((key) => {
			payload[key] = emptyToNull(formData[key])
		})

		return payload
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setAlert({ message: "", type: "" })

		try {
			const response = await fetch("https://api.sirajulhuda.com/api/v1/erp/admission/application/create", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(buildPayload()),
			})

			const result = await response.json()
			const applicationId = result?.applicationId || result?.data?.applicationId || result?.data?.id || result?.id

			if (result.detail === "application existed") {
				setAlert({ message: "Application already exists.", type: "error" })
				return
			}

			const created = response.ok || result.status === 200 || result.status === 201
			if (!created) {
				setAlert({ message: result.message || "Submission failed. Please try again.", type: "error" })
				return
			}

			if (applicationId) {
				const submitResponse = await fetch(`https://api.sirajulhuda.com/api/v1/erp/admission/admission-application/submit/${applicationId}`, {
					method: "GET",
					headers: { Accept: "application/json" },
				})

				if (!submitResponse.ok) {
					setAlert({ message: "Application was created, but final submission failed. Please contact the admission office.", type: "error" })
					return
				}
			}

			setShowSuccessPopup(true)
			setFormData({})
			setSelectedStandard("")
			setSelectedAcademicYear("")
		} catch (error) {
			console.error("Error submitting application:", error)
			setAlert({ message: "Error submitting application. Please try again.", type: "error" })
		} finally {
			setIsSubmitting(false)
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}

	const renderField = (field) => (
		<div key={field.name} className="admission-field-group">
			<label htmlFor={field.name}>
				{field.title}
				{field.required && <span className="required">*</span>}
			</label>
			{field.isYesNo || field.type === "select" ? (
				<select
					id={field.name}
					name={field.name}
					value={formData[field.name] || ""}
					onChange={handleChange}
					required={field.required}
					className="admission-field"
				>
					<option value="">Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			) : (
				<input
					id={field.name}
					type={field.type}
					name={field.name}
					value={formData[field.name] || ""}
					onChange={handleChange}
					required={field.required}
					className="admission-field"
					placeholder={`Enter ${field.title}`}
				/>
			)}
		</div>
	)

	return (
		<div className="admission-form-container">
			<div className="admission-form-header">
				<span className="section-eyebrow">Application Form</span>
				<h3 className="montserrat">Student Admission Application</h3>
				<p>Fill in the details below and our admission team will contact you for the next step.</p>
			</div>

			{alert.message && (
				<div className={`admission-alert admission-alert-${alert.type}`}>
					{alert.message}
				</div>
			)}

			{showSuccessPopup && (
				<div className="admission-success-overlay">
					<div className="admission-success-card">
						<img src={successIcon} alt="Success" />
						<h2>Application Submitted Successfully</h2>
						<p>Our admission team will review the application and contact you with the counseling schedule.</p>
						<button type="button" onClick={() => setShowSuccessPopup(false)}>
							Close
						</button>
					</div>
				</div>
			)}

			{isLoading ? (
				<div className="admission-form-loading">
					<i className="ri-loader-4-line"></i>
					<span>Loading admission fields...</span>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="admission-form">
					<div className="admission-form-section-block">
						<h4 className="form-section-title">Program Selection</h4>
						<div className="admission-form-grid">
							<div className="admission-field-group">
								<label htmlFor="selectedStandard">
									Select Standard <span className="required">*</span>
								</label>
								<select
									id="selectedStandard"
									value={selectedStandard}
									onChange={(e) => setSelectedStandard(e.target.value)}
									className="admission-field"
									required
								>
									<option value="">Choose a standard</option>
									{standards.map((std) => (
										<option key={std.id} value={std.id}>{std.name}</option>
									))}
								</select>
							</div>

							<div className="admission-field-group">
								<label htmlFor="selectedAcademicYear">
									Select Academic Year <span className="required">*</span>
								</label>
								<select
									id="selectedAcademicYear"
									value={selectedAcademicYear}
									onChange={(e) => setSelectedAcademicYear(e.target.value)}
									className="admission-field"
									required
								>
									<option value="">Choose academic year</option>
									{academicYears.map((year) => (
										<option key={year.id} value={year.id}>{year.name}</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{groupedFields.map((group) => (
						<div className="admission-form-section-block" key={group.title}>
							<h4 className="form-section-title">{group.title}</h4>
							<div className="admission-form-grid">
								{group.fields.map(renderField)}
							</div>
						</div>
					))}

					<button type="submit" disabled={isSubmitting} className="submit-button">
						{isSubmitting ? "Submitting..." : "Submit Application"}
					</button>
				</form>
			)}
		</div>
	)
}

export default AdmissionForm
