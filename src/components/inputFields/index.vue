<template>
    <!-- Input With Label -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-mt-1">
        <input 
        v-bind="$attrs"
        :class="{
            'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with label and help text -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-mt-1">
        <input 
        v-bind="$attrs"
        :class="{
            'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm"
        :placeholder="type" />
        <p 
        v-bind="$attrs"
        :class="{
            'dd-text-gray-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        class="dd-mt-2">
            <slot>{{ description }}</slot>
        </p>
      </div>
    </div>

    <!-- Input with validation error -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-red-300 dd-text-red-700 dd-placeholder-red-300 dd-focus:border-red-500 dd-focus:outline-none dd-focus:ring-red-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm dd-pr-10"
        :placeholder="type" />
        <div 
        v-bind="$attrs"
        :class="{
            'dd-h-5 dd-w-5 dd-text-red-500':color == 'disabled',
        }"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-3">
        <slot><svgIcon2 /></slot>
        </div>
      </div>
      <p 
        v-bind="$attrs"
        :class="{
            'dd-text-red-600':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        class="dd-mt-2">
            <slot>{{ description }}</slot>
      </p>
    </div>

    <!-- Input with disabled state -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-mt-1">
        <input 
        v-bind="$attrs"
        :class="{
            'dd-border-gray-300 dd-text-gray-700 dd-bg-gray-50 dd-text-gray-500 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        :disabled="disabled"
        class="dd-block dd-w-full dd-shadow-sm"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with hidden label -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block dd-sr-only"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-mt-1">
        <input 
        v-bind="$attrs"
        :class="{
            'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with corner hint -->
    <div>
      <div class="dd-flex dd-justify-between">
        <label
          v-bind="$attrs"
          v-if="type == 'text'"
              :class="{
              'dd-text-gray-700':color == '',
              'dd-text-sm dd-font-medium': size === 'sm' 
              }"
              class="dd-block"
              ><slot>{{ title }}</slot>
          </label>
          <span 
            v-bind="$attrs"
              :class="{
              'dd-text-gray-500':color == '',
              'dd-text-sm': size === 'sm' 
              }"><slot> {{ optional }} </slot></span>
      </div>
      <div class="dd-mt-1">
        <input 
        v-bind="$attrs"
        :class="{
            'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with leading icon -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <div 
        v-bind="$attrs"
        :class="{
            'dd-h-5 dd-w-5 dd-text-gray-400':color == 'disabled',
        }"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3">
        <slot><svgIcon2 /></slot>
        </div>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm dd-pl-10"
        :placeholder="type" />
        
      </div>
    </div>

    <!-- Input with trailing icon -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-shadow-sm dd-pr-10"
        :placeholder="type" />
        <div 
        v-bind="$attrs"
        :class="{
            'dd-h-5 dd-w-5 dd-text-gray-400':color == 'disabled',
        }"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-3">
        <slot><svgIcon2 /></slot>
        </div>
      </div>
    </div>

    <!-- Input with add-on -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-flex dd-mt-1 dd-rounded-md dd-shadow-sm">
        <span 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-700 dd-bg-gray-50 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        class="dd-inline-flex dd-items-center dd-rounded-l-md dd-rounded-none dd-border dd-border-r-0 dd-px-3">
        <slot>{{ addOn }}</slot></span>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-min-w-0 dd-flex-1 dd-rounded-none dd-rounded-r-md dd-px-3 dd-py-2 dd-shadow-sm"
        :placeholder="type" />
      </div>
    </div>
    
    <!-- Input with inline add-on -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <span 
        v-bind="$attrs"
        :class="{
          'dd-text-gray-500':color == '',
          'dd-text-sm': size === 'sm' 
        }"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3">
        <slot>{{ addOn }}</slot></span>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-rounded-md dd-pl-16 dd-pl-14"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with inline leading and trailing add-ons -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <div class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3">
          <span 
          v-bind="$attrs"
          :class="{
            'dd-text-gray-500':color == '',
            'dd-text-sm': size === 'sm' 
          }">
          <slot>{{ sign }}</slot></span>
        </div>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-rounded-md dd-pl-7 dd-pr-12"
        :placeholder="type" />
        <div class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-3">
          <span 
          v-bind="$attrs"
          :class="{
            'dd-text-gray-500':color == '',
            'dd-text-sm': size === 'sm' 
          }">
          <slot>{{ currency }}</slot></span>
        </div>
      </div>
    </div>

    <!-- Input with inline leading dropdown -->
    <div>
      <label 
      v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot></label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <div class="dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center">
          <label class="dd-sr-only"><slot>{{ title }}</slot></label>
          <select 
          v-bind="$attrs"
          :class="{
            'dd-text-gray-500 dd-bg-transparent dd-border-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
          class="dd-h-full dd-rounded-md dd-py-0 dd-pl-3 dd-pr-7">
            <option v-for="country in currencyTitle">{{ country }}</option>
          </select>
        </div>
        <input
        v-bind="$attrs"
        :class="{
          'dd-text-gray-700 dd-border-gray-300 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-font-medium': size === 'sm' 
          }"
          :value="modelValue"
          :type="type" 
          :name="type" 
          class="dd-block dd-w-full dd-rounded-md dd-pl-16" 
          :placeholder="type" />
      </div>
    </div>

    <!-- Input with inline leading add-on and trailing dropdown -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
        <div class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3">
          <span 
          v-bind="$attrs"
          :class="{
            'dd-text-gray-500':color == '',
            'dd-text-sm': size === 'sm' 
          }">
          <slot>{{ sign }}</slot></span>
        </div>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-rounded-md dd-pl-7 dd-pr-12"
        :placeholder="type" />
        <div class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center">
          <label class="dd-sr-only"><slot>{{ title }}</slot></label>
          <select 
          v-bind="$attrs"
          :class="{
            'dd-text-gray-500 dd-bg-transparent dd-border-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
          class="dd-h-full dd-rounded-md dd-py-0 dd-pl-2 dd-pr-7">
            <option v-for="country in currencyTitle">{{ country }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Input with leading icon and trailing button -->
    <div>
    <label 
      v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block">
            <slot>{{ title }}</slot>
          </label>
      <div class="dd-mt-1 dd-flex dd-rounded-md dd-shadow-sm">
        <div class="dd-relative dd-flex dd-flex-grow dd-items-stretch dd-focus-within:z-10">
          <div 
          v-bind="$attrs"
          :class="{
              'dd-h-5 dd-w-5 dd-text-gray-400':color == 'disabled',
          }"
          class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3">
          <slot><svgIcon2 /></slot>
          </div>
          <input 
          v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
          }"
          :value="modelValue"
          :type="type" 
          :name="type" 
          class="dd-block dd-w-full dd-rounded-none dd-rounded-l-md dd-pl-10 dd-border-r-0"
          :placeholder="type" />
        </div>
        <button
        v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-bg-gray-50 dd-text-gray-700 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
          }"
        class="dd-relative dd-ml-px dd-inline-flex dd-items-center dd-space-x-2 
        dd-rounded-r-md dd-border dd-px-4 dd-py-2 hover:bg-gray-100 dd-focus:outline-none dd-focus:ring-1">
          <div 
          v-bind="$attrs"
          :class="{
              'dd-h-5 dd-w-5 dd-text-gray-400':color == 'disabled',
          }"
          class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-1">
          <slot><svgIcon2 /></slot>
          </div>
          <span><slot>{{ sort }}</slot></span>
        </button>
      </div>
    </div>

    <!-- Inputs with shared borders -->
    <div>
      <fieldset>
        <legend 
        v-bind="$attrs"
          v-if="type == 'text'"
              :class="{
              'dd-text-gray-700':color == '',
              'dd-text-sm dd-font-medium': size === 'sm' 
              }"
              class="dd-block">
              <slot>{{ title }}</slot>
            </legend>
        <div class="dd-mt-1 dd-space-y-px dd-rounded-md dd-bg-white dd-shadow-sm">
          <div>
            <label class="dd-sr-only"><slot>{{ title }}</slot></label>
            <input 
              v-bind="$attrs"
              :class="{
                'dd-border-gray-300 dd-text-gray-900 bg-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
                'dd-text-sm dd-rounded-md': size === 'sm' 
              }"
              :value="modelValue"
              :type="type"
              :name="type" 
              class="dd-relative dd-block dd-w-full dd-rounded-none dd-rounded-t-md dd-focus:z-10"
              :placeholder="type" />
          </div>
          <div class="dd-flex dd-space-x-px">
            <div class="dd-w-1/2 dd-min-w-0 dd-flex-1">
              <label class="dd-sr-only"><slot>{{ title }}</slot></label>
              <input 
              v-bind="$attrs"
              :class="{
                'dd-border-gray-300 dd-text-gray-900 bg-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
                'dd-text-sm dd-rounded-md': size === 'sm' 
              }"
              :value="modelValue"
              :type="type"
              :name="type" 
              class="dd-relative dd-block dd-w-full dd-rounded-none dd-rounded-bl-md dd-focus:z-10"
              :placeholder="type" />
            </div>
            <div class="dd-min-w-0 dd-flex-1">
              <label class="dd-sr-only"><slot>{{ title }}</slot></label>
              <input 
              v-bind="$attrs"
              :class="{
                'dd-border-gray-300 dd-text-gray-900 bg-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
                'dd-text-sm dd-rounded-md': size === 'sm' 
              }"
              :value="modelValue"
              :type="type"
              :name="type" 
              class="dd-relative dd-block dd-w-full dd-rounded-none dd-rounded-br-md dd-focus:z-10"
              :placeholder="type" />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="dd-mt-6 dd-bg-white">
        <legend 
          v-bind="$attrs"
            v-if="type == 'text'"
                :class="{
                'dd-text-gray-700':color == '',
                'dd-text-sm dd-font-medium': size === 'sm' 
                }"
                class="dd-block">
                <slot>{{ title }}</slot>
          </legend>
        <div class="dd-mt-1 dd-space-y-px dd-rounded-md dd-shadow-sm">
          <div>
            <label class="dd-sr-only"><slot>{{ title }}</slot></label>
            <select 
            v-bind="$attrs"
            :class="{
              'dd-border-gray-300 dd-bg-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
              'dd-text-sm dd-font-medium': size === 'sm' 
              }"
            class="dd-relative dd-block dd-w-full dd-rounded-none dd-rounded-t-md dd-focus:z-10">
              <option v-for="count in currencyName">{{ count }}</option>
            </select>
          </div>
          <div>
            <label class="dd-sr-only"><slot>{{ title }}</slot></label>
            <input 
              v-bind="$attrs"
              :class="{
                'dd-border-gray-300 dd-text-gray-900 bg-transparent dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
                'dd-text-sm dd-rounded-md': size === 'sm' 
              }"
              :value="modelValue"
              :type="type"
              :name="type" 
              class="dd-relative dd-block dd-w-full dd-rounded-none dd-rounded-b-md dd-focus:z-10"
              :placeholder="type" />
          </div>
        </div>
      </fieldset>
    </div>

    <!-- Input with inset label -->
    <div 
    v-bind="$attrs"
      :class="{
        'dd-border-gray-300 dd-text-gray-900 dd-placeholder-gray-500 dd-focus-within:border-indigo-600 dd-focus-within:ring-indigo-600':color == '',
        'dd-text-sm dd-rounded-md': size === 'sm' 
      }"
      class="dd-border dd-px-3 dd-py-2 dd-shadow-sm dd-focus-within:ring-1">
      <label 
        v-bind="$attrs"
          v-if="type == 'text'"
              :class="{
              'dd-text-gray-900':color == '',
              'dd-text-xs dd-font-medium': size === 'xs' 
              }"
              class="dd-block">
              <slot>{{ title }}</slot>
      </label>
      <input 
      v-bind="$attrs"
      :class="{
        'dd-border-gray-300 dd-text-gray-900 dd-placeholder-gray-500':color == '',
        'dd-text-sm dd-rounded-md': size === 'sm' 
      }"
      :value="modelValue"
      :type="type" 
      :name="type" 
      class="dd-block dd-w-full dd-border-0 dd-p-0 dd-focus:ring-0"
      :placeholder="type" />
    </div>

    <!-- Inputs with inset labels and shared borders -->
    <div class="dd-isolate dd-space-y-px dd-rounded-md dd-shadow-sm">
      <div 
      v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-focus-within:border-indigo-600 dd-focus-within:ring-indigo-600':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
      class="dd-relative dd-rounded-b-none dd-border dd-px-3 dd-py-2 dd-focus-within:z-10 dd-focus-within:ring-1">
        <label 
          v-bind="$attrs"
            v-if="type == 'text'"
                :class="{
                'dd-text-gray-900':color == '',
                'dd-text-xs dd-font-medium': size === 'xs' 
                }"
                class="dd-block">
                <slot>{{ title }}</slot>
        </label>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-placeholder-gray-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-border-0 dd-p-0 dd-focus:ring-0"
        :placeholder="type" />
      </div>
      <div 
      v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-focus-within:border-indigo-600 dd-focus-within:ring-indigo-600':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
      class="dd-relative dd-rounded-t-none dd-border dd-border-t-0 dd-px-3 dd-py-2 dd-focus-within:z-10 dd-focus-within:ring-1">
        <label 
          v-bind="$attrs"
            v-if="type == 'text'"
                :class="{
                'dd-text-gray-900':color == '',
                'dd-text-xs dd-font-medium': size === 'xs' 
                }"
                class="dd-block">
                <slot>{{ title }}</slot>
        </label>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-placeholder-gray-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type" 
        :name="type" 
        class="dd-block dd-w-full dd-border-0 dd-p-0 dd-focus:ring-0"
        :placeholder="type" />
      </div>
    </div>

    <!-- Input with overlapping label -->
    <div 
    v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-focus-within:border-indigo-600 dd-focus-within:ring-indigo-600':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
    class="dd-relative dd-border dd-px-3 dd-py-2 dd-shadow-sm dd-focus-within:ring-1">
      <label 
          v-bind="$attrs"
            v-if="type == 'text'"
                :class="{
                'dd-text-gray-900 dd-bg-white':color == '',
                'dd-text-xs dd-font-medium': size === 'xs' 
                }"
                class="dd-absolute dd-left-2 dd-mt-px dd-px-1 dd-inline-block dd-top-2">
                <slot>{{ title }}</slot>
        </label>
        <input 
        v-bind="$attrs"
        :class="{
          'dd-border-gray-300 dd-text-gray-900 dd-placeholder-gray-500':color == '',
          'dd-text-sm dd-rounded-md': size === 'sm' 
        }"
        :value="modelValue"
        :type="type"
        :name="type" 
        class="dd-block dd-w-full dd-border-0 dd-p-0 dd-focus:ring-0"
        :placeholder="type" />
    </div>

    <!-- Input with pill shape -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block dd-pl-4 dd-ml-px"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-mt-1">
        <input 
          v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-text-gray-900 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
          }"
          :value="modelValue"
          :type="type" 
          :name="type" 
          class="dd-block dd-w-full dd-rounded-full dd-px-4 dd-shadow-sm"
          :placeholder="type" />
      </div>
    </div>

    <!-- Input with gray background and bottom border -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div
      v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-focus-within:border-indigo-600':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
          }"
      class="dd-mt-1 dd-border-b">
        <input 
          v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-text-gray-900 dd-bg-gray-50 dd-border-transparent dd-placeholder-gray-500 dd-focus:border-indigo-600':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
          }"
          :value="modelValue"
          :type="type" 
          :name="type" 
          class="dd-block dd-w-full dd-border-0 dd-border-b dd-p-0 dd-focus:ring-0"
          :placeholder="type" />
      </div>
    </div>
    
    <!-- Input with keyboard shortcut -->
    <div>
      <label
        v-bind="$attrs"
        v-if="type == 'text'"
            :class="{
            'dd-text-gray-700':color == '',
            'dd-text-sm dd-font-medium': size === 'sm' 
            }"
            class="dd-block"
            ><slot>{{ title }}</slot>
        </label>
      <div class="dd-relative dd-mt-1 dd-flex dd-items-center">
        <input 
          v-bind="$attrs"
          :class="{
            'dd-border-gray-300 dd-text-gray-900 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-text-sm dd-rounded-md': size === 'sm' 
          }"
          :value="modelValue"
          :type="type" 
          :name="type" 
          class="dd-block dd-w-full dd-pr-12 dd-shadow-sm"
          :placeholder="type" />
        <div class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-py-1.5 dd-pr-1.5">
          <kbd
          v-bind="$attrs"
          :class="{
            'dd-border-gray-200 dd-text-gray-400 dd-focus:border-indigo-500 dd-focus:ring-indigo-500':color == '',
            'dd-font-sans dd-text-sm dd-font-medium ': size === 'sm' 
          }"
           class="dd-inline-flex dd-items-center dd-rounded dd-border dd-px-2">{{ shortCut }}</kbd>
        </div>
      </div>
    </div>

</template>

<script>
import svgIcon2 from "/src/components/icons/AlertIcon.vue"
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      optional: {
        type: String,
        default: "",
      },
      sort: {
        type: String,
        default: "",
      },
      shortCut: {
        type: String,
        default: "",
      },
      addOn: {
        type: String,
        default: "",
      },
      sign: {
        type: String,
        default: "",
      },
      currency: {
        type: String,
        default: "",
      },
      disabled: {
        type: Boolean,
        default: "false",
      },
      color: {
        type: String,
        default: "",
      },
      size: {
        type: String,
        validator: function (value) {
          return (
            ['xs','sm', 'base', 'lg','xl',].indexOf(value) !== -1
          );
        },
        default: "",
      },
      currencyTitle:{
        type: Array,
        default: () => [],
      },
      currencyName:{
        type: Array,
        default: () => [],
      },
      type: {
        type: String,
        validator: function (value) {
          return ["text"].indexOf(value) !== -1;
        },
        default: "text",
      },
      modelValue: {
        type: String,
        validator: function (value) {
        },
        default: "Testing",
      }
    },
    data() {
      return {};
    },
    components: {
      svgIcon2,
    },
  };
</script>

<style lang="scss" scoped></style>