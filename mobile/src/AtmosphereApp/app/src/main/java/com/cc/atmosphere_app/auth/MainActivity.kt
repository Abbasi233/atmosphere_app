package com.cc.atmosphere_app.auth

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.cc.atmosphere_app.R
import com.cc.atmosphere_app.home.HomeActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun register(view: View){
        startActivity(Intent(applicationContext, RegisterActivity::class.java))
    }

    fun login(view: View) {
        startActivity(Intent(applicationContext, HomeActivity::class.java))
    }

    fun forgotPassword(view: View) {
        startActivity(Intent(applicationContext, ForgotPasswordActivity::class.java))
    }
}