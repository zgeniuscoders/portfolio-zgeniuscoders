import './style.css'

const accordionFlushHeading1: HTMLElement|null = document.getElementById("accordion-flush-heading-1")
const accordionFlushBody1: HTMLElement|null = document.getElementById("accordion-flush-body-1")


const accordionFlushHeading2: HTMLElement|null = document.getElementById("accordion-flush-heading-2")
const accordionFlushBody2: HTMLElement|null = document.getElementById("accordion-flush-body-2")

const accordionFlushHeading3: HTMLElement|null = document.getElementById("accordion-flush-heading-3")
const accordionFlushBody3: HTMLElement|null = document.getElementById("accordion-flush-body-3")


accordionFlushHeading3?.addEventListener("click", (e) => {
    accordionFlushBody3?.classList.toggle("hidden")
})

accordionFlushHeading2?.addEventListener("click", (e) => {
    accordionFlushBody2?.classList.toggle("hidden")
})

accordionFlushHeading1?.addEventListener("click", (e) => {
    accordionFlushBody1?.classList.toggle("hidden")
})