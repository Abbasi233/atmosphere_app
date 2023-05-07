package com.cc.atmosphere_app.home

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.cc.atmosphere_app.R

class HomeActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

//        val card1 = findViewById<CardView>(R.id.card1)
//        val card2 = findViewById<CardView>(R.id.card2)
//        val card3 = findViewById<CardView>(R.id.card3)
//
//        card1.setOnClickListener { openJobDetail() }
//        card2.setOnClickListener { openJobDetail() }
//        card3.setOnClickListener { openJobDetail() }
    }

    fun openJobDetail(view: View){
        startActivity(Intent(applicationContext, JopDetailActivity::class.java))
    }
}