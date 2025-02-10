package com.emailsender;

import com.emailsender.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EmailSenderTest {


    @Autowired
    private EmailService emailService;



    @Test
    void sendEmailTest(){
        System.out.println("Email Test.....");
        emailService.sendEmail("aakashprataps832@gmail.com", "Greetings ", "Good Evening Sir");
    }

    @Test
    void sentHtmlEmail(){
        String html = "" +
                "<h1 style='color:red;border:1px solid red;'>Good Evening Sir</h1>"
                + "";

        emailService.sendEmailWithHtml("aakashprataps832@gmail.com", "Greetings ", html);
    }
}
