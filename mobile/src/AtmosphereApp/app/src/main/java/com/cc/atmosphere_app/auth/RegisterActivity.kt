package com.cc.atmosphere_app.auth

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import com.cc.atmosphere_app.R

class RegisterActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)
    }

    fun login(view:View){
        finish()
    }

    fun register(view: View) {
        Toast.makeText(this, "Hesabınız kaydedildi. Giriş yapabilirsiniz.", Toast.LENGTH_SHORT).show()
        finish()
    }
}