package com.cc.atmosphere_app.home

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import android.widget.Spinner
import android.widget.TextView
import com.cc.atmosphere_app.R

class ApplyJobActivity : AppCompatActivity() {
    lateinit var citySpinner: Spinner
    lateinit var jobTypeSpinner: Spinner

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_apply_job)

        citySpinner = findViewById(R.id.citySpinner)
        jobTypeSpinner = findViewById(R.id.jobTypeSpinner)

        val cities = resources.getStringArray(R.array.cities)
        val jobTypes = resources.getStringArray(R.array.jobTypes)

        val cityAdapter= object : ArrayAdapter<String>(this,android.R.layout.simple_spinner_item, cities) {
            override fun getDropDownView(
                position: Int,
                convertView: View?,
                parent: ViewGroup
            ): View {
                return super.getDropDownView(position, convertView, parent) as TextView
            }
        }

        val jobTypeAdapter= object : ArrayAdapter<String>(this,android.R.layout.simple_spinner_item, jobTypes) {
            override fun getDropDownView(
                position: Int,
                convertView: View?,
                parent: ViewGroup
            ): View {
                return super.getDropDownView(position, convertView, parent) as TextView
            }
        }

        cityAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        citySpinner.adapter = cityAdapter

        jobTypeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        jobTypeSpinner.adapter = jobTypeAdapter
    }

    fun openPolicyActivity(view: View) {
        startActivity(Intent(applicationContext, PolicyActivity::class.java))
    }
}