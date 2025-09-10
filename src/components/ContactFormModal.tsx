import React, { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactFormModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit logic here
            onOpenChange(false);
            setForm({ name: "", email: "", phone: "", message: "" });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-teal-600 text-2xl font-bold mb-2">Send us a Message</DialogTitle>
                    <DialogDescription className="mb-4">We'd love to hear from you. Please fill out the form below.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1" htmlFor="name">Name <span className="text-red-500">*</span></label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1" htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                    <div>
                        <label className="block font-semibold mb-1" htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="+91 1234567890"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1" htmlFor="message">Message <span className="text-red-500">*</span></label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="How can we help you?"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                        {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                    </div>
                    <div className="pt-2">
                        <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold text-lg py-2 rounded-lg">Send Message</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ContactFormModal; 