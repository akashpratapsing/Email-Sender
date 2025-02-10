package com.emailsender.service;

import com.sun.jdi.event.StepEvent;

import java.io.File;
import java.io.InputStream;

public interface EmailService {

    // Send Email TO Single Person
    void sendEmail(String to, String subject, String message);

    // Send Email to Multiple person
    void sendEmail(String []to, String subject, String message);

    // Send Email with HTML
    void sendEmailWithHtml(String to, String subject, String htmlContent);

    // Send email with attachment
    void sendEmailWithAttachment(String to, String subject, String message, File file);

    void sendEmailWithAttachment(String to, String subject, String message, InputStream is);

}
