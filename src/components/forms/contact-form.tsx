"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { FormField } from "./form-field";
import { FormInput } from "./form-input";
import { FormTextarea } from "./form-textarea";
import { ContactFormData } from "@/src/types/contactForm";
import { contactFormSchema } from "@/src/validation/contactForm";
import { RiArrowRightLine } from "react-icons/ri";
import { sendContactEmail } from "@/src/app/actions/send-contact-email";
import { useState } from "react";
import { Typography } from "@/src/components/ui/typography";
import { PiCheckCircle, PiXCircle } from "react-icons/pi";
import { cn } from "@/src/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message envoyé !",
        });
        reset();
      } else {
        setStatus({
          type: "error",
          message: result.error || "Une erreur est survenue",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Une erreur est survenue lors de l'envoi du message",
      });
    }

    // Effacer le message après 10 secondes
    setTimeout(() => {
      setStatus({ type: null, message: "" });
    }, 10000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Prénom"
          name="firstName"
          error={errors.firstName?.message}
          required
        >
          <FormInput
            {...register("firstName")}
            error={errors.firstName?.message}
            placeholder="Jean"
          />
        </FormField>

        <FormField
          label="Nom"
          name="lastName"
          error={errors.lastName?.message}
          required
        >
          <FormInput
            {...register("lastName")}
            error={errors.lastName?.message}
            placeholder="Dupont"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Email"
          name="email"
          type="email"
          error={errors.email?.message}
          required
        >
          <FormInput
            type="email"
            {...register("email")}
            error={errors.email?.message}
            placeholder="jeandupont@gmail.com"
          />
        </FormField>

        <FormField
          label="Téléphone"
          name="phone"
          type="tel"
          error={errors.phone?.message}
        >
          <FormInput
            type="tel"
            {...register("phone")}
            error={errors.phone?.message}
            placeholder="06 06 06 06 06"
          />
        </FormField>
      </div>

      <FormField
        label="Message"
        name="message"
        error={errors.message?.message}
        required
      >
        <FormTextarea
          rows={5}
          {...register("message")}
          error={errors.message?.message}
          placeholder="Ecrivez votre message ici..."
        />
      </FormField>

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          variant="default"
          className="group flex items-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
          <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-all duration-300" />
        </Button>

        {status.type && (
          <Typography
            as="p"
            variant="lg"
            className={cn(
              status.type === "success" ? "text-green" : "text-red",
              "flex items-center gap-1"
            )}
          >
            {status.type === "success" ? (
              <PiCheckCircle className="text-green text-2xl" />
            ) : (
              <PiXCircle className="text-red text-2xl" />
            )}{" "}
            {status.message}
          </Typography>
        )}
      </div>
    </form>
  );
}
